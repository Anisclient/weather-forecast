import React from 'react'
import './placeholder.scss'
import cn from 'classnames'
import placeholder from '../../assets/placeholder/placeholder.png'

interface PlaceholderProps {
  className?: string
}

const Placeholder: React.FC<PlaceholderProps> = ({ className }) => {
  return (
    <div className={cn(`${className}`, 'placeholder')}>
      <img className="placeholder__img" src={placeholder} alt="cloud placeholder image" />
      <div className="placeholder__textwrapper">
        <p className="placeholder__text">
          Fill in all the fields and the weather will be displayed
        </p>
      </div>
    </div>
  )
}

export default Placeholder
