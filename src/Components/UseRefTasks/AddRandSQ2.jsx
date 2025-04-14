import { useState, useEffect } from "react";
import SquareR from "./SquareR.jsx";
import rand from '../../utilityFunctions/random.js';



export default function AddRandSQ2(){

    const [squares, setSquares] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        //load squares fro local storage on component mount
        const savedSquares = JSON.parse(localStorage.getItem("squares2")) || [];
        setSquares(savedSquares);
    }, []);

    //save quaeres to local storage when they change
    useEffect(() => {
        localStorage.setItem("squares2", JSON.stringify(squares));
    }, [squares])

    const addSquares = () => {
        const numToAdd = rand(5, 10);
        const newSquares = Array.from({ length: numToAdd }).map(() => ({
            id: rand(100000, 999999),
        }));
    
        // Save the current state to history
        setHistory((prevHistory) => [...prevHistory, squares]);
    
        // Update the squares state
        setSquares((prevSquares) => [...prevSquares, ...newSquares]);
    };
    
    const resetSquares = () => {
        // Save the current state to history
        setHistory((prevHistory) => [...prevHistory, squares]);
    
        // Clear the squares state
        setSquares([]);
    };


    const restoreStep = (stepIndex) => {
        // Restore squares to the selected step
        setSquares(history[stepIndex]);
        // Remove all steps after the selected one
        setHistory((prevHistory) => prevHistory.slice(0, stepIndex + 1));
    };

    const undoSquares = () => {
        if(history.length > 0){
            const lastState = history[history.length - 1];
            setSquares(lastState);
            setHistory(prevHistory => prevHistory.slice(0, -1))
        }
    };

    return (
        <>

                <form action="#" className="form-wrapper">
                    <fieldset>
                        <legend>2. Užduotis </legend>
                        <p>Patobulinti 1 uždavinį taip, kad šalia mygtuko “Atgal” atsirastų select laukelis, kuriame būtų sudedami visi padaryti žingsniai. T.y. jeigu mygtukas “Pridėti” buvo paspaustas 3 kartus select laukelis turi turėti tris pasirinkimus “1 žingsnis”, “2 žingsnis”, “3 žingsnis” ir t.t. Istorija turi būti atstatoma iki konkretaus žingsnio(vietoj useRef čia naudojamas useState istorijai saugoti).</p>
                        <div className="wrapper">

                            <div className="btn-container"> 
                                 <button className="btn btn-add" onClick={addSquares}>Pridėti</button>
                                 <button className="btn btn-remove" onClick={resetSquares}>Išvalyti</button>
                                 <button className="btn btn-back" onClick={undoSquares}>Atgal</button>

                                 <select
                                    className="history-select"
                                    onChange={e => restoreStep(Number(e.target.value))}
                                 
                                 >
                                    <option value="" disabled selected>Pasirinkti žingsnį</option>
                                    {
                                        history.map((_, index) => (
                                            <option key={index} value={index}>
                                                {index + 1} žingsnis
                                            </option>
                                        ))}

                                 </select>
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