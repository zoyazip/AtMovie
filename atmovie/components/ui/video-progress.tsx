import './video-progress.css'
import { timeToWidth, timeToMargin } from '@/lib/timeToPercentConverter'

interface VideoProgressProps {
    progress: number,
    scrub: any,
    videoDuration: number,
    film: IFilm
}

/*
  How this works: 
  {
    color: `bg-user-red`,
    width: timeToWidth({startAt: 0, endAt: 20, duration: videoDuration}),
    margin: timeToMargin({startAt: 0, endAt: 0, duration: videoDuration}),
    percentage: [0, 20]
  }

  Width:
    startAt: when replica starts,
    endAt: when replica ends,
    duration: whole video duration

  Margin: 
    startAt: end of the previous replica,
    endAt: start of current replica,
    duration: whole video duration

  Percentage: 
    0: current replica start
    1: current replica end
*/


export const VideoProgress = ({progress, scrub, videoDuration, film}: VideoProgressProps) => {


  const replicas: IReplica[] = film.fullReplicaText.map((x) => {
    return {
      color: film.cast[x.castId].colorName,
      width: timeToWidth(
        {
          startAt: x.progressBarData.width.startAt,
          endAt: x.progressBarData.width.endAt,
          duration: videoDuration
        }
      ),
      margin: timeToMargin(
        {
          startAt: x.progressBarData.margin[0].startAt,
          endAt: x.progressBarData.margin[0].endAt,
          duration: videoDuration
        },
        {
          startAt: x.progressBarData.margin[1].startAt,
          endAt: x.progressBarData.margin[1].endAt,
          duration: videoDuration
        }
      ),
      percentage: x.progressBarData.percentage
    }
  })

    const replicaCheck = (replica: IReplica): string => {
      return progress >= replica.percentage[0] && progress <= replica.percentage[1] ? 'opacity-100' : 'opacity-40'
    }

    return (
        <div className='w-full relative'>
            <input className={`timeline w-full `} type="range" id="vol" name="vol" value={progress} min="0" max="98" step="0.001" onChange={(e) => {scrub(e.currentTarget.value)}} />
            {
              replicas.map((replica, id) => {
                return (
                  <div style={{zIndex: 1, top: -4, width: `${replica.width}%`, marginLeft: `${replica.margin}%`}} key={id} className={`progress h-2 absolute rounded-full pointer-events-none bg-${replica.color} ${replicaCheck(replica)}`}></div>
                )
              })
            }
        </div>
    )
}

// export const VideoProgress = ({progress, scrub, videoDuration, film}: VideoProgressProps) => {

//   const replicas: IReplica[] = [
//     {
//       color: `bg-user-red`,
//       width: timeToWidth({startAt: 0, endAt: 20, duration: videoDuration}),
//       margin: timeToMargin({startAt: 0, endAt: 0, duration: videoDuration}),
//       percentage: [0, 20]
//     },
//     {
//       color: "bg-user-blue",
//       width: timeToWidth({startAt: 26, endAt: 29, duration: videoDuration}),
//       margin: timeToMargin({startAt: 20, endAt: 26, duration: videoDuration}, {startAt: 0, endAt: 20, duration: videoDuration}),
//       percentage: [26, 29]
//     },
//     {
//       color: "bg-user-red",
//       width: timeToWidth({startAt: 30, endAt: 31, duration: videoDuration}),
//       margin: timeToMargin({startAt: 29, endAt: 30, duration: videoDuration}, {startAt: 0, endAt: 29, duration: videoDuration}),
//       percentage: [30, 31]
//     },
//     {
//       color: "bg-user-blue",
//       width: timeToWidth({startAt: 31, endAt: 32, duration: videoDuration}),
//       margin: timeToMargin({startAt: 31, endAt: 31, duration: videoDuration}, {startAt: 0, endAt: 31, duration: videoDuration}),
//       percentage: [31, 32]
//     },
//     {
//       color: "bg-user-red",
//       width: timeToWidth({startAt: 32, endAt: 33, duration: videoDuration}),
//       margin: timeToMargin({startAt: 32, endAt: 32, duration: videoDuration}, {startAt: 0, endAt: 32, duration: videoDuration}),
//       percentage: [32, 33]
//     },
//     {
//       color: "bg-user-yellow",
//       width: timeToWidth({startAt: 36, endAt: 39, duration: videoDuration}),
//       margin: timeToMargin({startAt: 33, endAt: 36, duration: videoDuration}, {startAt: 0, endAt: 33, duration: videoDuration}),
//       percentage: [36, 39]
//     },
//     {
//       color: "bg-user-green",
//       width: timeToWidth({startAt: 40, endAt: 41, duration: videoDuration}),
//       margin: timeToMargin({startAt: 39, endAt: 40, duration: videoDuration}, {startAt: 0, endAt: 39, duration: videoDuration}),
//       percentage: [40, 41]
//     },
//     {
//       color: "bg-user-pink",
//       width: timeToWidth({startAt: 43, endAt: 44, duration: videoDuration}),
//       margin: timeToMargin({startAt: 41, endAt: 43, duration: videoDuration}, {startAt: 0, endAt: 41, duration: videoDuration}),
//       percentage: [43, 44]
//     },
//     {
//       color: "bg-user-orange",
//       width: timeToWidth({startAt: 44, endAt: 47, duration: videoDuration}),
//       margin: timeToMargin({startAt: 44, endAt: 44, duration: videoDuration}, {startAt: 0, endAt: 44, duration: videoDuration}),
//       percentage: [44, 47]
//     },
//     {
//       color: "bg-user-violet",
//       width: timeToWidth({startAt: 48, endAt: 49, duration: videoDuration}),
//       margin: timeToMargin({startAt: 47, endAt: 48, duration: videoDuration}, {startAt: 0, endAt: 47, duration: videoDuration}),
//       percentage: [48, 49]
//     },
//     {
//       color: "bg-user-cyan",
//       width: timeToWidth({startAt: 49, endAt: 52, duration: videoDuration}),
//       margin: timeToMargin({startAt: 49, endAt: 49, duration: videoDuration}, {startAt: 0, endAt: 49, duration: videoDuration}),
//       percentage: [49, 52]
//     },
//     {
//       color: `bg-user-red`,
//       width: timeToWidth({startAt: 53, endAt: 55, duration: videoDuration}),
//       margin: timeToMargin({startAt: 52, endAt: 53, duration: videoDuration}, {startAt: 0, endAt: 52, duration: videoDuration}),
//       percentage: [53, 55]
//     },
//     {
//       color: "bg-user-violet",
//       width: timeToWidth({startAt: 55, endAt: 56, duration: videoDuration}),
//       margin: timeToMargin({startAt: 55, endAt: 55, duration: videoDuration}, {startAt: 0, endAt: 55, duration: videoDuration}),
//       percentage: [55, 56]
//     },
//     {
//       color: `bg-user-red`,
//       width: timeToWidth({startAt: 56, endAt: 59, duration: videoDuration}),
//       margin: timeToMargin({startAt: 56, endAt: 56, duration: videoDuration}, {startAt: 0, endAt: 56, duration: videoDuration}),
//       percentage: [56, 59]
//     },
//   ]

//     const replicaCheck = (replica: IReplica): string => {
//       return progress >= replica.percentage[0] && progress <= replica.percentage[1] ? 'opacity-100' : 'opacity-40'
//     }

//     return (
//         <div className='w-full relative'>
//             <input className={`timeline w-full `} type="range" id="vol" name="vol" value={progress} min="0" max="98" step="0.001" onChange={(e) => {scrub(e.currentTarget.value)}} />
//             {
//               replicas.map((replica, id) => {
//                 return (
//                   <div style={{zIndex: 1, top: -4, width: `${replica.width}%`, marginLeft: `${replica.margin}%`}} key={id} className={`progress h-2 absolute  rounded-full pointer-events-none ${replica.color} ${replicaCheck(replica)}`}></div>
//                 )
//               })
//             }
//         </div>
//     )
// }
