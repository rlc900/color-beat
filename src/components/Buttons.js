import React, { useEffect } from 'react';

export default function Button ({parentButtonPress}) {
    // console.log(parentButtonPress)

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
        const whatisthis = document.addEventListener('keydown', pressButton())
        console.log(whatisthis)
    })

    const buttons = buttonsArray.map((button) => {
        return <button key={button.name}>{button.name}</button>
    })
  
    function pressButton(e) {
        // console.log(e)
        // if (e.keyCode === buttons.name) {
        //     console.log('this works')
        // }
    }

    return (
        <div>
            {buttons}
        </div>
    )
}

