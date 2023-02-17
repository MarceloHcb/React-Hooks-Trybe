import React from 'react'

export default function MailControlButtons({setAllStatus}) {
  return (
    <div>
        <button onClick={() => setAllStatus('lidas')}>Marcar todas como lida</button>
        <button onClick={() => setAllStatus('nao-lidas')} >Marcar todas como não lida</button>
    </div>
  )
}
