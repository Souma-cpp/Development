import React from 'react';
import "./App.css"
import Input from './Input';

export default function Form(props) {
    return (
        <>
            <form>
                <h2>{props.heading}</h2>
                <Input
                    id='username'
                    name='username'
                    type='text'
                    label='User Name :'
                    placeholder='Enter the username' />
                <Input
                    id='password'
                    name='password'
                    type='password'
                    label='Password :'
                    placeholder='Enter the password' />

                {props.boolean === false ? <Input
                    id='confirm_password'
                    name='confirmed_password'
                    type='password'
                    label='Confirm Password :'
                    placeholder='Enter password again ' /> : null}

                <button type="submit">
                    {props.button}
                </button>
            </form>
        </>
    );
}
