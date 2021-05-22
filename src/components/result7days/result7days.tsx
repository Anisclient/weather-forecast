import React from 'react'
import Forecast from '../forecast'
import './result7days.scss'
import cn from 'classnames'

interface Result7daysProps {
  className?: string
}

const Result7days: React.FC<Result7daysProps> = ({ className }) => {
  const week = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className={cn(className, 'result7days')}>
      <div className="result7days__slider">
        <div className="result7days__line">
          {week.map((day) => (
            <Forecast key={day} className="result7days__forecast" />
          ))}
        </div>
      </div>
      <div className="result7days__btns">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.41424 12.0001L16.7071 19.293L15.2929 20.7072L6.58582 12.0001L15.2929 3.29297L16.7071 4.70718L9.41424 12.0001Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5858 12.0001L7.29286 19.293L8.70708 20.7072L17.4142 12.0001L8.70708 3.29297L7.29286 4.70718L14.5858 12.0001Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Result7days
