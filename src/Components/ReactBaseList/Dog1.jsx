import Square from './Square.jsx';
import Circle from './Circle.jsx';


export default function Dog1(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
        <h3>1. Sunu vardai(pavadinimai) kvadratuose.</h3>
        <div className="square-container">
            {
                dogs.map((dog, i) => <Square key={i} animal={dog} /> )
            }
        </div>


        </>
    )

}