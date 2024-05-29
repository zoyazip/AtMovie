import './video-progress.css'
import { timeToWidth, timeToMargin } from '@/lib/timeToPercentConverter'

interface VideoProgressProps {
    progress: number,
    scrub: any,
    videoDuration: number,
    film: IFilm,
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
      color: film.cast[x.castId].color,
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
            <input className={`timeline w-full`} type="range" id="vol" name="vol" value={progress} min="0" max="98" step="0.1" onChange={(e) => {scrub(e.currentTarget.value)}} />
            {
              replicas.map((replica, id) => {
                return (
                  <div style={{backgroundColor: replica.color, zIndex: 1, top: -4, width: `${replica.width}%`, marginLeft: `${replica.margin}%`}} key={id} className={`progress h-2 absolute rounded-full pointer-events-none ${replicaCheck(replica)}`}></div>
                )
              })
            }
        </div>
    )
}


