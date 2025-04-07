import { useState } from 'react';
import './forms.css';

export default function CustomTextInput(){

const [text, setText] = useState('');
const [color, setColor] = useState();
const [fontSize, setFontSize] = useState();
const [fontFamily, setFontFamily] = useState();

//options for dropdowns
// const colors = ['#23315f', '#163f34', '#681a2c', '#c66e00', '#432143'];
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
const fontSizes = ['16px', '20px', '24px', '28px', '32px'];
const fontFamilies = ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia'];

    return(
        <form action="#" className="form-wrapper">
            <fieldset>
                <legend>4. Užduotis </legend>
                <p>Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.</p>

                <div className="wrapper">
                    <div className="wrapper-customText">
                        <input
                            type="text"
                            className="input-sq"
                            placeholder="Įveskite tekstą"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />

                        <select 
                        className="select-dropdown"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        >
                            {colors.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                        
                        <select 
                        className="select-dropdown"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                        >
                            {fontSizes.map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>
                        
                        <select 
                        className="select-dropdown"
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        >
                            {fontFamilies.map((family, index) => (
                                <option key={index} value={family}>{family}</option>
                            ))}
                        </select>


                    </div>

                     <div style={{
                        color: color,
                        fontSize: fontSize,
                        fontFamily: fontFamily
                     }}>
                    {text}
                    </div>   

                </div>
            </fieldset> 
        </form>

    )
}