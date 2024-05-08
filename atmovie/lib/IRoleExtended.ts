interface IDividedText {
  phrase: string,
  startsAt: number,
  endsAt: number
}

interface IRoleExtended extends IRole {
  captions: IDividedText[]
}