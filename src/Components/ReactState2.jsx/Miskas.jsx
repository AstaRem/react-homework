import { useState } from 'react';


export default function Miskas(){

    const[visibility, setVisibility] = useState({
        Azuolas: false,
        Berzas: false,
        Uosis: false
    });

    const toggleVisibility = (treeType) => {
        setVisibility(previousVisibility => ({
            ...previousVisibility,
            [treeType]: !previousVisibility[treeType],
        }));
    }

    return(
        <>
        <h3>1. Aplikacija, atvaizduojanti žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.</h3>
        <div className="forest-container">
            <div className="tree-container">
                {visibility.Azuolas && <div className="tree-box">Ąžuolas</div>}
            </div>
            <div className="tree-container">
                {visibility.Berzas && <div className="tree-box">Beržas</div>}
            </div>
            <div className="tree-container">
                {visibility.Uosis && <div className="tree-box">Uosis</div>}
            </div>
        </div>
        <div className="btn-container">
            <div className="btn-div">
                <button onClick= {() => toggleVisibility("Azuolas")} className="change-btn">Ąžuolas</button>
            </div>

            <div className="btn-div">
                <button onClick= {() => toggleVisibility("Berzas")} className="change-btn">Beržas</button>
            </div>

            <div className="btn-div">
                <button onClick= {() => toggleVisibility("Uosis")} className="change-btn">Uosis</button>
            </div>

        </div>
        </>
    )
}