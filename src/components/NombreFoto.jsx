import React from 'react'

export default function NombreFoto(props) {
  let {category, image} = props
  return (
    <div>
        <h2>{category}</h2>
        <img src={image} alt={category}></img>
    </div>
  )
}
