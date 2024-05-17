import Image from 'next/image'
import React from 'react'

function Feature({inverted, header, description, image, height}) {
  return (
    <div className='feature' id={header.split(' ')[0].toLowerCase()} style={inverted ? {flexDirection: 'row-reverse'} : {}}>
        <div className='feature-text'>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
        <div className='feature-image'>
            <Image fill src={image} alt={`feature-${header}`} style={{objectFit: 'contain'}}/>
        </div>
    </div>
  )
}

export default Feature