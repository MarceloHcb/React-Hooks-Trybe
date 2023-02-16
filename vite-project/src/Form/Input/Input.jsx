import React from 'react'

export default function Input({label, type, handleChange, name}) {
  return (
    <label>
        {label}
        <input type={type} onChange={handleChange} name={ name } placeholder={label}></input>
    </label>
  )
}
