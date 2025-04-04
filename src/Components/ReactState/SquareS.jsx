
export default function Square(props) { 



    return (
        <div className="square shapes-text" style={{backgroundColor: props.color}} >
            
            
            <div>{props.randomNum}</div>
            <div> </div>
   
        </div>
    );
}