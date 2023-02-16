import React, { useState } from 'react'
import Button from './Button/Button'
import Input from './Input/Input'

export default function Form() {
    const initialUserInfo = {
        name: '',
        idade: '',
        cidade: '',
    }
    const [userInfo, setUserInfo ] = useState( initialUserInfo )
    const [modulo, setModulo] = useState({
        modulo: '',
    })
    const isFilled = !!(userInfo.name && userInfo.idade)
    console.log(isFilled);
     const modulos = ['Fundamentos', 'Front-end', 'Back-end',  'Ciência da Computação']
    const handleChange = ({target}) => { 
        const { name, value } = target        
        setUserInfo({
            ...userInfo,
           [name]: value
        })
    }
    const handleClick = () => {
        console.log([userInfo, modulo]);
    }
  return (
    <form>
        <fieldset>
        <legend>Dados pessoais</legend>   
        <Input type={'text'} label={'Nome Completo:'} name='name'  handleChange={handleChange}/>
        <Input type={'number'} label={"Idade:"} name='idade' handleChange={handleChange}/>
        <Input type={'text'} label={'Cidade:'} name="cidade"  handleChange={handleChange}/>
        <div>
    {modulos.map((modulo, index) => (
        <Input type={'radio'} name='modulo' key={index} label={modulo} handleChange={() => setModulo({modulo:modulo})} />
        ))}
        </div>
        <Button type='button' title='Click' disabled={isFilled} handleClick={handleClick}/>
        <h2>Nome: {userInfo.name}</h2>
        <h2>Idade: {userInfo.idade}</h2>
        <h2>cidade: {userInfo.cidade}</h2>
        <h2>Módulo: {modulo.modulo} </h2>
        <Button type='button' title='Reset'disabled='false' handleClick={()=>( setUserInfo(initialUserInfo), setModulo('')) }/>
        </fieldset>
    </form>
  )
}
