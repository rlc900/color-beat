import React, { useRef, useEffect } from 'react'

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
        console.log('yooooooo', button.name)
    }

    return (
    <button onClick={handleClick} ref={buttonElement}>{button.name}</button>
    )
}