import Image from 'next/image'
import React from 'react'

function Feature({inverted, header, description, image}) {
  return (
    <div className='feature' style={inverted ? {flexDirection: 'row-reverse'} : {}}>
        <div className='feature-text'>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
        <div className='feature-image'>
            <Image src={image} alt={`feature-${header}`} />
        </div>
    </div>
  )
}

export default Feature