import React, { useRef, useEffect, useState } from 'react'
import * as Tone from 'tone'

export default function Button ({button, pressedKey}) {
    let buttonElement = useRef(null)
    let [colors, setColors] = useState({ color: 'black' });
    
    useEffect(() => {
        if (pressedKey.letter === button.name) {
            // console.log('hello from,', button.name, buttonElement)
            // debugger
            buttonElement.current.click()
        }
    }, [pressedKey, button.name])

    function handleClick() {


    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    

    // LOGIC FOR SELECTING RANDOM COLOR
        let firstColor = 'black'
        let secondColor = 'blue'
        let changedColor = colors.color === 'black' ? secondColor : firstColor
        setColors({color: changedColor})
        console.log(colors)
    // let randomColor;
    // const randomColor = setColors(colors[Math.floor(
    //     Math.random() * colors.length)])
   
    // const x = document.getElementById('body');
    // x.style.color = randomColor;

    }

    return (
    <div style={{backgroundColor: colors.color}}>
    <button onClick={handleClick} ref={buttonElement}>{button.name}</button>
    </div>
    )
}

