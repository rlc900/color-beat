import React, { useState, useEffect } from 'react';
import Button from './Button'

export default function Buttons ({parentButtonPress}) {
    // console.log(parentButtonPress)
    const [pressedKey, setPressedKey] = useState({letter: ''});

    const buttonsArray = [
        {name: 'q'},
        {name: 'w'},
        {name: 'r'},
        {name: 'e'},
        {name: 't'},
        {name: 'y'},
        {name: 'u'},
        {name: 'i'},
        {name: 'o'},
        {name: 'p'}
    ]

    useEffect(() => {
        document.addEventListener('keydown', pressButton)
        return () => {
            document.removeEventListener('keydown', pressButton)
        }
    })
    
    function pressButton(e) {
        // console.log(e.key)
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

