import Image from 'next/image'
import React from 'react'

function Feature({inverted, header, description, image, height}) {
  return (
    <div className='feature' id={header.split(' ')[0].toLowerCase()} >
       <div className='feature-image'>
            <Image fill src={image} alt={`feature-${header}`} style={{objectFit: 'contain'}}/>
        </div> 
        <div className='feature-text'>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
        
    </div>
  )
}

export default Feature