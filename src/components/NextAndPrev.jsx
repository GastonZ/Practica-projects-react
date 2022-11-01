import React from 'react'

export default function NextAndPrev(props) {
    console.log(props)
    let {verbo} = props
    let {siguienteOAnterior} = props

  return (
    <p onClick={siguienteOAnterior} className="m-10 bg-dark"> {verbo} </p>
  )
}
