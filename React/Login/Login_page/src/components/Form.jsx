import React from 'react'
import "../App.css"
import Input from './Input'
export default function Form() {
  return (
    <>
        <form>
            <Input type='username' name='Username' placeholder='Enter the username' />
            <Input type='email' name='Email' placeholder='Enter the email'/>
            <button>Login</button>
        </form>
    </>
  )
}
