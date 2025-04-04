import Square from './Square.jsx';
import Circle from './Circle.jsx';


export default function Dog3(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    let count = 1;


    return (
        <>

        <h3>3.Poriniuose indeksuose esantys šunys atvaizduoti kvadratuose, neporiniai apskritime.</h3>
        <div className="circle-container">
            {
                dogs.map((dog, i) => {
                    return i % 2 === 0 
                    ? <Square key={i} animal={dog} counter={count++} index={i} /> 
                    : <Circle key={i} animal={dog} counter={count++} index={i} />
                    })
            }
        
        </div>

        </>
    )

}