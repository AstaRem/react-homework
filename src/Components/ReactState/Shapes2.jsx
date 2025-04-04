import { useState } from 'react';
import CircleS from './CircleS.jsx'
import SquareS from './SquareS.jsx';
import random from '../../utilityFunctions/random.js';

export default function Shapes1() {

    //shape true-circle; shape false-square
    const [shape, changeShape] = useState(true);

    const toggleShape = () => {
        changeShape(previousShape => !previousShape)
    }

    const[oldRandom, changeRandom] = useState(random(5, 25));

    const changeNum = () => {
        changeRandom(random(5, 25));
    }

    return (
        <>
            <h3>2. Aplikacija, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25</h3>

            {
                shape ? <CircleS randomNum={oldRandom}/> : <SquareS randomNum={oldRandom}/>
            }

            <button className='change-btn' onClick={toggleShape}>Keisti formą</button>
            <button className='change-btn' onClick={changeNum}>Keisti skaičių </button>
        <hr/>
        </>
    )
}