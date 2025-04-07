import { useState } from 'react';
import './forms.css';

export default function CustomSquare(){

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [color, setColor] = useState('#000000');

    const[squares, setSquares] = useState([]);

    const handleCreate = () => {
        setWidth(100);
        setHeight(100);
        setColor('#000000');
    };

    const handleSave = () => {
        setSquares((prevSquares) => [
            ...prevSquares,
            { width, height, color },
        ]);
        console.log(squares)
    };

    return(
        <form action="#" className="form-wrapper">
            <fieldset>
                <legend>5. Užduotis </legend>
                <p>Sukurti komponentą su dviem range tipo įvedimais <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range'> Range </a> vienu color įvedimu <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color'>Color</a> ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai
                nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.</p>

                <div className="wrapper">
                <label>
                        Plotis: {width}px
                        <input
                            type="range"
                            min="10"
                            max="200"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Aukštis: {height}px
                        <input
                            type="range"
                            min="10"
                            max="200"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                        />
                    </label>

                    <label>
                        Spalva:&nbsp;
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                </div>

                {/* Dynamic square */}
                <div style={{height: '250px'}}>
                <div
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        backgroundColor: color,
                        margin: '20px auto',
                        border: '1px solid black',
                    }}
                ></div>

                </div>

                
                <div>
                    <button className="btn-add" onClick={handleCreate}>
                        Pradėti naują
                    </button>
                    <button className="btn-add" onClick={handleSave}>
                        Išsaugoti
                    </button>
                </div>

                <div className="sq-container">
                    {squares.map((square, index) => (
                        <div
                            key={index}
                            style={{
                                width: `${square.width}px`,
                                height: `${square.height}px`,
                                backgroundColor: square.color,
                                margin: '10px',
                                border: '1px solid black',
                            }}
                        ></div>
                    ))}
                </div>
            </fieldset>
                




            
        </form>

    )
}