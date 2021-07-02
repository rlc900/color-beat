import React, { useRef, useEffect, useState } from 'react'
import {styled} from 'styled-components'
import * as Tone from 'tone'

export default function Button ({button, pressedKey}) {
    let buttonElement = useRef(null)
    // let [colors, setColors] = useState({ color: 'black' });
    // let [colors, setColors] = useState(['black']);
   
    // useEffect(() => {
    //     document.body.style.backgroundColor = 'black'
    // }, [])

    useEffect(() => {
        if (pressedKey.letter === button.name) {
            // console.log('hello from,', button.name, buttonElement)
            // debugger
            buttonElement.current.click()
        }
        // document.body.style.backgroundColor = 'black'
    }, [pressedKey, button.name])

    function handleClick() {

    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    
    // LOGIC FOR SELECTING RANDOM COLOR
        let colors = ['black', 'blue', 'red', 'green', 'pink']
        // let changedColor = colors.color === 'black' ? secondColor : firstColor
        // colors.map((color) => {
            // let firstColor = 'black'
            // let secondColor = 'blue'
            
            // let changedColor = color === 'black' ? secondColor : firstColor
            // console.log(changedColor)
            // setColors([...colors, changedColor])
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            
        // })
        // setColors({color: changedColor})
        
        // console.log(colors.color)
        
    }

    return (
    <div className='button'>
    <button onClick={handleClick} ref={buttonElement}>{button.name}</button>
    </div>
    )
}
