export const blobTransfer = async (file: any) => {
  const formData = new FormData()
  formData.append('audioFile', file)

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to upload audio')
  }

  return response


}