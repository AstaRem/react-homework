import { useState, useRef, useEffect } from "react";
import SquareR from "./SquareR";
import rand from '../../utilityFunctions/random.js';



export default function AddRandSQ(){

    const [squares, setSquares] = useState([]);
    const history = useRef([]);

    useEffect(() => {
        //load squares fro local storage on component mount
        const savedSquares = JSON.parse(localStorage.getItem("squares")) || [];
        setSquares(savedSquares);
    }, []);

    //save quaeres to local storage when they change
    useEffect(() => {
        localStorage.setItem("squares", JSON.stringify(squares));
    }, [squares])



    const addSquares = () => {
        const numToAdd = rand(5, 10);
        const newSquares = Array.from({length: numToAdd}).map(() => ({
            id: rand(100000, 999999)
        }));
        history.current.push([...squares]);
        setSquares(prevSquares => [...prevSquares, ...newSquares]);
        console.log(squares)
    }

    const resetSquares = () => {
        history.current.push([...squares]);
        setSquares([]);
    }

    const undoSquares = () => {
        if(history.current.length > 0){
            const lastState = history.current.pop();
            setSquares(lastState);
        }
    }

    return (
        <>

                <form action="#" className="form-wrapper">
                    <fieldset>
                        <legend>1. Užduotis </legend>
                        <p>Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai. Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų paspaudimo.</p>
                        <div className="wrapper">

                            <div className="btn-container"> 
                                 <button className="btn btn-add" onClick={addSquares}>Pridėti</button>
                                 <button className="btn btn-back" onClick={undoSquares}>Atgal</button>
                                 <button className="btn btn-remove" onClick={resetSquares}>Išvalyti</button>
                            </div>

                            <div className="sq-container">
                                {squares.map((square) => (
                                        <SquareR key={square.id}/>
                                ) )}
                            </div>



        
                        </div>
                    </fieldset> 
                </form>
        






        </>
    )

}