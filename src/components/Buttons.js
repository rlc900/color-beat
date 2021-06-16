import React, { useState, useEffect } from 'react';
import Button from './Button'

export default function Buttons () {
    // console.log(parentButtonPress)
    const [pressedKey, setPressedKey] = useState({letter: ''});

    const buttonsArray = [
        {
            name: 'q',
            id: 1
        },
        {
            name: 'w',
            id: 2
        },
        {
            name: 'r',
            id: 3
        },
        {
            name: 'e',
            id: 4
        },
        {
            name: 't',
            id: 5
        },
        {
            name: 'y',
            id: 6
        },
        {
            name: 'u',
            id: 7
        },
        {
            name: 'i',
            id: 8
        },
        {
            name: 'o',
            id: 9
        },
        {
            name: 'p',
            id: 10
        }
    ]

    useEffect(() => {
        document.addEventListener('keydown', pressButton)
        return () => {
            document.removeEventListener('keydown', pressButton)
        }
    })
    
    function pressButton(e) {
        console.log(e.key)
        setPressedKey({letter: e.key})
    }
    // console.log(pressedKey)

    const buttons = buttonsArray.map((button) => {
        return <Button pressedKey={pressedKey} button={button} key={button.name}/>
    })

    
  
    // console.log(buttons)
    return (
        <div>
            {buttons}
        </div>
    )
}

