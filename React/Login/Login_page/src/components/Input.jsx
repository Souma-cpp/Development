import React from 'react'
import "../App.css"



export default function Input({type , name , placeholder}) {
  return (
    <>
        <label>{name} : </label>
        <input type={type} name={name} placeholder={placeholder}/>
    </>
  )
}
