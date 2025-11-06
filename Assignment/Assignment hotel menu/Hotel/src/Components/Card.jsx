import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="card1">
        <img src={props.img} alt="" height={200} width={200} />
        <h1>{props.name}</h1>
        <h3>{props.comp}</h3>
    </div>
  )
}

export default Card;