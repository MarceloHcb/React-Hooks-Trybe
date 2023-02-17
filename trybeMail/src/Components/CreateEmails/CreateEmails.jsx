import React, { useState } from 'react'

export default function CreateEmails({createEmail}) {
    const [newEmail, setNewEmail] = useState('')
    const handleChange = ({target}) => {
        setNewEmail(target.value)
    }
  return (
    <div>
        <fieldset>
            <legend>Criar novo Email</legend>
        <label htmlFor="">            
            <br />
        <input type="text" name="email" placeholder='Email' value={newEmail} onChange={handleChange} />
        </label>
        <button onClick={()=> {createEmail(newEmail), setNewEmail('')}} >Criar</button>
        </fieldset>
    </div>
  )
}
