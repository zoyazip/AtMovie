import './video-progress.css'

interface VideoProgressProps {
    progress: number,
    scrub: any
}

interface IReplica {
  color: string,
  width: string,
  margin: string,
  percentage: number[]
}

const replicas: IReplica[] = [
  {
    color: "bg-userRed",
    width: "w-[30%]",
    margin: "",
    percentage: [0, 28]
  },
  {
    color: "bg-userBlue",
    width: "w-[20%]",
    margin: "ml-[35%]",
    percentage: [33, 54]
  },
  {
    color: "bg-userYellow",
    width: "w-[10%]",
    margin: "ml-[60%]",
    percentage: [59, 70]
  },
  {
    color: "bg-userGreen",
    width: "w-[5%]",
    margin: "ml-[72%]",
    percentage: [72, 77]
  },
  {
    color: "bg-userYellow",
    width: "w-[15%]",
    margin: "ml-[80%]",
    percentage: [80, 97]
  },
]

export const VideoProgress = ({progress, scrub}: VideoProgressProps) => {

  const replicaCheck = (replica: IReplica): string => {
    return progress >= replica.percentage[0] && progress <= replica.percentage[1] ? 'opacity-100' : 'opacity-20'
  }

    return (
        <div className='w-full relative'>
            <input className={`timeline w-full `} type="range" id="vol" name="vol" value={progress} min="0" max="98" step="0.001" onChange={(e) => {scrub(e.currentTarget.value)}} />
            {
              replicas.map((replica, id) => {
                return (
                  <div key={id} className={`progress h-2 ${replica.margin} ${replica.width} absolute top-[44%] rounded-full ${replica.color} ${replicaCheck(replica)}`}></div>
                )
              })
            }
        </div>
    )
}
