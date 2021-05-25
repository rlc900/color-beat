import React, { useRef, useEffect } from 'react'
import { Song, Track, Instrument, Effect } from 'reactronica'

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
        console.log('yooooooo', button.name)
    }

    return (
    <div>
        <Song bpm={90} isPlaying={true}>
            <Track>
             <Instrument type="monoSynth" />
            </Track>
         </Song>
    <button onClick={handleClick} ref={buttonElement}>{button.name}</button>
    </div>
    )
}