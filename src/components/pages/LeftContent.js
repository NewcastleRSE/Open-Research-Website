import React from 'react'

function LeftContent(props) {
  return (
    <div>
      <figure>
        <img src={props.img} alt='' className='img-fluid' />
      </figure>
      <h2>{props.heading}</h2>
      <p>{props.subtext}</p>
      <a href='/about' className='btn_1 rounded'>
        About Us
      </a>
    </div>
  )
}

export default LeftContent
