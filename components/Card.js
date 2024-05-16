import Image from 'next/image'
import React from 'react'
import check from '@/assets/icons/coche.png'

function Card({name, price, services}) {
  return (
    <div className='card'>
        <h3>{name}</h3>
        <h1>{price}€</h1>
        <ul>
           {services.map(service => (
            <li>
                <Image src={check} height={18}/>{service}
            </li>
        ))} 
        </ul>
    </div>
  )
}

export default Card