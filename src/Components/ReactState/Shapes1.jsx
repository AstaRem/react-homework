import { useState } from 'react';
import CircleS from './CircleS.jsx'
import SquareS from './SquareS.jsx';

export default function Shapes1() {

    //shape true-circle; shape false-square
    const [shape, changeShape] = useState(true);

    const toChange = () => {
        changeShape(previousShape => !previousShape)
    }

    return (
        <>
            <h3>1. Aplikacija, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.</h3>

            {
                shape ? <CircleS /> : <SquareS />
            }

            <button className='change-btn' onClick={toChange}>Keisti</button>
        <hr/>
        </>
    )
}