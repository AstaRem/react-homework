import { useEffect, useState } from 'react';
import './forms.css';
import Cat from './Cat';



export default function CatsAdd(){

const [cats, setCats] = useState([{name: 'Miau', weight: '10'}]);
const [catName, setCatName] = useState('');
const [catWeight, setCatWeight] = useState('');

useEffect(() => {
    const storedCats = localStorage.getItem('cats');
    if(storedCats){
        setCats(JSON.parse(storedCats));
    }
}, [])


const saveCat = (e) => {
    e.preventDefault();

    if(!catName || !catWeight) return;

    const newCat = {name: catName, weight: catWeight};

    const updatedCats = [...cats, newCat];
    localStorage.setItem('cats', JSON.stringify(updatedCats)); 

    setCats(updatedCats);

    setCatName('');
    setCatWeight('');

}

useEffect(() => {
    console.log(cats);
}, [cats])


    return(
        <form action="#" className="form-wrapper">
            <fieldset>
                <legend>2. Užduotis </legend>
                <p>Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.</p>
                <div className="wrapper">

                    
                    <input className="input-sq" type="text" name="name" value={catName} onChange={(e)=>setCatName(e.target.value)} placeholder="Įveskite katinuko vardą" />
                    <input className="input-sq" type="text" name="weight" value={catWeight} onChange={(e)=>setCatWeight(e.target.value)} placeholder="Įveskite katinuko svorį" />
                        <div>
                            <button className="btn-add" onClick={saveCat} >Pridėti katuką</button>
                        </div>


                        <div>
                        {/* {
                            squares.map((square) => <SquareF key={square.id} randomNum={square.randomValue} /> )
                        } */}
                        
                        {/* <div>Katuko vardas: {cat.name}</div>
                        <div>Katuko svoris: {cat.weight}</div> */}

                        <Cat cats={cats}/>
                    </div>

                </div>
            </fieldset> 
        </form>

    )
}