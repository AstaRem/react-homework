import { useState } from 'react';
import './forms.css';
import linked from '../../assets/linked.svg';



export default function LinkedInput(){

const [num1, setNum1] = useState(100);
const [num2, setNum2] = useState(50);

const handleNum1Change = (e) => {
    const inputValue = Number(e.target.value); // when there is nothing, '' - it will convert to 0
    setNum1(inputValue);
    setNum2(inputValue / 2);
}

const handleNum2Change = (e) => {
    const inputValue = Number(e.target.value);
    setNum1(inputValue);
    setNum2(inputValue * 2);
}


    return(
        <form action="#" className="form-wrapper">
            <fieldset>
                <legend>3. Užduotis </legend>
                <p>Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.</p>
                <div className="wrapper">

                    
                    <input className="linked-input" type="text" name="name" value={num1} onChange={handleNum1Change} />
                    <img src={linked} style={{width: '20px'}}></img>
                    <input className="linked-input" type="text" name="weight" value={num2} onChange={handleNum2Change} />


                        <div>
                            {/* <button className="btn-add" onClick={saveCat} >Pridėti katuką</button> */}
                        </div>



                </div>
            </fieldset> 
        </form>

    )
}