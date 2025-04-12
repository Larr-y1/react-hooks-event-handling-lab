// Code Keypad Component Here

function Keypad (){

    function handleClick (e) {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={handleClick}/>
    )
}

export default Keypad;