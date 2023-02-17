import React from 'react'

export default function Emails({emails, handleclick}) {
 
  return (
    <div>
        {emails.map(({title,id, status  }) => (
            <div key={id}>
            <h2>{title}</h2>
            <button value={status} disabled={status === 1} id={id} onClick={handleclick}>Lida</button>
            <button value={status}  disabled={status === 0} id={id} onClick={handleclick}>Não lida</button>
            </div>
        ))}
    </div>
  )
}
