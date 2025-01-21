import React from 'react'

function Card( props) {
  return (
      <div className="card flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md  cursor-pointer">
        <p className="">{props.text}</p>
        <img className="max-w-50" src={props.src} alt="" />
      </div>
  
  )
}

export default Card
