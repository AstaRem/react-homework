import { useState } from 'react';
import CircleS from './CircleS.jsx'

export default function Shapes1() {

    const[count, setCount] = useState(0);

    const addOne = () => {
        setCount(previousCount => previousCount + 1)
    }

    const minusThree = () => {
        setCount(previousCount => previousCount - 3)

    }
    return (
        <>
            <h3>3. Aplikacija, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3</h3>

            
            <CircleS result={count}/> 
            

            <button className='change-btn' onClick={addOne}>Plius 1</button>
            <button className='change-btn' onClick={minusThree}>Minus 3 </button>
        <hr/>
        </>
    )
}