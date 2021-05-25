import React, { useRef, useEffect } from 'react'
import * as Tone from 'tone'

export default function Button ({button, pressedKey}) {
    let buttonElement = useRef(null)

    useEffect(() => {
        if (pressedKey.letter === button.name) {
            // console.log('hello from,', button.name, buttonElement)
            // debugger
            buttonElement.current.click()
        }
    }, [pressedKey, button.name])

    function handleClick() {
    // figure out what sounds you want
    // figure out how to import sounds
    // implement logic here to trigger sound effects for each key pressed
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
        console.log('yooooooo', button.name)
    }

    return (
    <div>
    <button onClick={handleClick} ref={buttonElement}>{button.name}</button>
    </div>
    )
}