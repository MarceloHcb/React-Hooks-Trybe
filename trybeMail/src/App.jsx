import { useEffect, useState } from 'react'
import './App.css'
import CreateEmails from './Components/CreateEmails/CreateEmails'
import Emails from './Components/Emails/Emails'
import Header from './Components/Header/Header'
import MailControlButtons from './Components/MailButtons/MailControlButtons'

function App() {
  const [emails, setEmails] = useState([
    {
      id: 0,
      title: "Fatura do seu Cartão de crédito",
      status: 0
    },
    {
      id: 1,
      title: "Venha conferir nossas ofertas!",
      status: 0
    }
  ]
  )
  console.log(emails);
  const createEmail = (newEmail) => {
    const objNewEmail = {
      id: emails.length + 1,
      title: newEmail,
      status: 0,
    }
    setEmails([...emails,objNewEmail])
  }
  const handleClick = ({target}) => {    
  const EditedEmail= emails.map((email) =>{
    if( email.id === Number(target.id)){
      return{ ...email, status: Number(target.value) === 0 ? 1 :  0}
    }
  
    return email
  })
  setEmails(EditedEmail);  
  }

  const setAllStatus = (param) => {
    const EditedEmail= emails.map((email) =>{
      if(param === 'lidas'){

        return{ ...email, status: 1 }
      } else{
        return{ ...email, status: 0 }
      }   
      
    })
    setEmails(EditedEmail);  
  }

  useEffect(() => {
    if(emails.every(({status}) =>status === 1)){
      alert('Parabéns! Você leu todas suas mensagens!')
    }
  }, [emails])

  return (
    <div className="App">
      <h1>TrybeMail</h1>
      <Header />
      <MailControlButtons setAllStatus={setAllStatus} />
      <Emails emails={emails} handleclick={handleClick}/>
      <br />
      <br />
      <br />
      <CreateEmails createEmail={createEmail}/>

    </div>
  )
}

export default App
