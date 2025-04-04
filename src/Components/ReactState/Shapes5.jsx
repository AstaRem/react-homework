import { useState } from 'react';
import SquareS from './SquareS.jsx';

export default function Shapes1() {

    const [squares, setSquares] = useState([]);

    const addRedSquare = () => {
        setSquares(prevSq => [...prevSq, {color:'rgb(185, 50, 50)' }])
    }


    const addBlueSquare = () => {
        setSquares(prevSq => [...prevSq, {color:'rgb(35, 49, 95)'}])
    }

    const setToZero = () => {
        setSquares([])
    }
    
    

    return (
        <>
            <h3>5. Aplikacija, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina</h3>
            <div className="square-container">
            {
                squares.map((square, index) => <SquareS key={index} color={square.color}/>)
            }

            </div>

            <button className='change-btn add-red-btn' onClick={addRedSquare}>Pridėti raudoną</button>
            <button className='change-btn add-blue-btn' onClick={addBlueSquare}>Pridėti<br/>mėlyną</button>
            <button className='change-btn' onClick={setToZero}>Pradėti iš naujo</button>
        <hr/>
        </>
    )
}