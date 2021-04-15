

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

    const buttons = buttonsArray.map((button) => {
    return <button>{button.name}</button>
    })


    return (
        <div>
            {buttons}
        </div>
    )
}