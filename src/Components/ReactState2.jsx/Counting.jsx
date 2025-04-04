import { useState } from 'react';

export default function Counting(){

const[count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
});

const addOne = () => {
    setCount(prevValue => {
        const newCount = prevValue + 1
        localStorage.setItem('count', newCount);
        return newCount;
    }
    
    );
}

const setToZero = () => {
    setCount(0)
}


    return (

        <>
        <h3>3. Aplikacija su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėja vienetu. Panaudota localStorage ir padaryta taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus</h3>
        <div>
            <div style={{fontSize: '18px', fontWeight: 600, width:'30px', height: '30px', backgroundColor:'lightgray', borderRadius:'50%', margin:'20px auto', padding: '10px'}}>{count}</div>
            <button onClick={addOne} className="change-btn">Pridėti 1</button>
            <button onClick={setToZero} className="change-btn">Iš naujo</button>
        </div>
        </>
    )
}