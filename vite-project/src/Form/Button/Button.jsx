import React from 'react'

export default function Button({title, type, handleClick, disabled}) {
  return (
    <button type={type} onClick={handleClick} disabled={!disabled} >{title}</button>
  )
}
