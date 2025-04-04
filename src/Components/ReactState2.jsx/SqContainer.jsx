import { useState } from 'react';
import SquareB from './SquareB.jsx';

export default function SqContainer() {

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
            <h3>2. Aplikacija su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsiranda juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsiranda keli tokie juodi kvadratai, paspaudus 3 - atsiranda 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėja vienetu (kiekviename kvadrate atskirai).</h3>
            <div className="square-container">
            {
                Array.from({length: count}).map((shape, index) => <SquareB key={index} shape={shape} color={'black'}/>)
            }

            </div>

            <button className='change-btn' onClick={addSquare}>Pridėti kvadratą</button>
            <button className='change-btn' onClick={removeSquare}>Atimti kvadratą</button>
            <button className='change-btn' onClick={setToZero}>Pradėti iš naujo</button>
        <hr/>
        </>
    )
}