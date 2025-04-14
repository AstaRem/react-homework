import { useRef } from 'react';
import getRandomHexColor from '../../utilityFunctions/randColor.js'
import Circles from './Circles.jsx';

export default function ColorCircles(){
// console.log(getRandomHexColor());

// const circleQty = 5;
const circleRefs = useRef([]);
console.log(circleRefs);



const changeColors = () => {
    circleRefs.current.forEach(circle => {
        if(circle){
            console.log(circleRefs)
            console.log(circleRefs.current)
            circle.style.background = getRandomHexColor();
        }
    });
} ;




    return (
                        <form action="#" className="form-wrapper">
                            <fieldset>
                                <legend>3. Užduotis </legend>
                                <p>Sukurti komponentą su 3 apskritimais, kurie yra rand spalvų ir mygtuką “Keisti”. Apskritimus DOMe pasižymėti naudojant useRef hooką. Paspaudus mygtuką, panaudoti vanilaJS savybę element.style.background ir pakeisti apskritimų spalvas į kitas random spalvas.</p>
                                <div className="wrapper">
        
                                    <div className="btn-container"> 
                                         <button className="btn btn-change" onClick={(e) => { e.preventDefault(); changeColors();}} >Keisti</button>
        
                                    </div>
        
                                    <div className="circle-container">

                                        <Circles ref={(el) => circleRefs.current[0] = el} backgroundC={getRandomHexColor()}/>
                                        <Circles ref={(el) => circleRefs.current[1] = el} backgroundC={getRandomHexColor()}/>
                                        <Circles ref={(el) => circleRefs.current[2] = el} backgroundC={getRandomHexColor()}/>
                                    </div>
        
        
        
                
                                </div>
                            </fieldset> 
                        </form>
        
    )
}