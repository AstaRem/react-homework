import { useState } from 'react';
import './forms.css';
import randomNum from '../../utilityFunctions/random.js'
import SquareF from './SquareF.jsx';


export default function AddSqForm(){

const [qty, setQty] = useState('');
const [squares, setSquares] = useState([])

const handleInput = (e) => {
    setQty(e.target.value);
}

const addSquares = () => {
    
    const numToAdd = parseInt(qty, 10);
    if(isNaN(numToAdd) || numToAdd < 0){
        return
    }

    const newSquares = Array.from({length: numToAdd}).map(() => ({
        id: randomNum(100000000, 9000000000),
        randomValue: randomNum(100, 200)
    }));

    setSquares(prevSquares => [...prevSquares, ...newSquares]);
    setQty('');
}

const resetSquares = () => {
    setSquares([]);
    setQty('');
}



    return(
        <form action="#" className="form-wrapper">
            <fieldset>
                <legend>1. Užduotis </legend>
                <p>Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.</p>
                <div className="wrapper">
                    <input className="input-sq" type="text" value={qty} onChange={handleInput} placeholder="Įveskite skaičių nuo 1 iki 18" />
                        <div>
                            <button className="btn-add" onClick={addSquares} >Pridėti</button>
                            <button className="btn-start-again" onClick={resetSquares} >Pradėti iš naujo</button>   
                        </div>


                        <div className="sq-container">
                        {
                            squares.map((square) => <SquareF key={square.id} randomNum={square.randomValue} /> )
                        }
                        
                    </div>

                </div>
            </fieldset> 
        </form>

    )
}