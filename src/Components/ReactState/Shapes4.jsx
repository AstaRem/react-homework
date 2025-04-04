import { useState } from 'react';
import SquareS from './SquareS.jsx';

export default function Shapes1() {

    const [count, setCount] = useState(0);

    const addSquare = () => {
        setCount(prevCount => prevCount + 1)
    }

    const removeSquare = () => {
        setCount(prevCount => prevCount - 1)
    }

    const setToZero = () => {
        setCount(0)
    }
    
    console.log(count)
    

    return (
        <>
            <h3>4. Aplikacija, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.</h3>
            <div className="square-container">
            {
                Array.from({length: count}).map((shape, index) => <SquareS key={index} shape={shape}/>)
            }

            </div>

            <button className='change-btn' onClick={addSquare}>Pridėti kvadratą</button>
            <button className='change-btn' onClick={removeSquare}>Atimti kvadratą</button>
            <button className='change-btn' onClick={setToZero}>Pradėti iš naujo</button>
        <hr/>
        </>
    )
}