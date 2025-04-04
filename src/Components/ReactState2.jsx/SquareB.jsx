import{ useState } from 'react';

export default function SquareS(props) { 

const[count, setCount] = useState(0);

const addOne = () => {
    setCount(prevValue => prevValue + 1);
}


    return (
        <div className="square shapes-text" style={{backgroundColor: props.color, borderRadius: '7px'}} >
            <div>{count}</div>
            <button onClick={addOne} style={{borderRadius: '7px'}} >+</button>
               
        </div>
    );
}