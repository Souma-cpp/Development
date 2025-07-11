import React from 'react'

export default function Input(props) {
    return (
        <div>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}
