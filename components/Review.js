import React from 'react'

function Review({name, review}) {
  return (
    <div className='review'>
        <h2>{name}</h2>
        <q>{review}</q>
    </div>
  )
}

export default Review