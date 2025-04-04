import Square from './Square.jsx';
import Circle from './Circle.jsx';


export default function Dog3(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    let count = 1;

    let withLowercase = [];

    for(let i = 0; i < dogs.length; i++){

        // /^\p{Lu}/u matches any uppercase letter at the start of the string, including those from non-English alphabets.
        ///^\p{Ll}/u Matches any lowercase letter at the start of the string

        if (/^\p{Ll}/u.test(dogs[i])){

            withLowercase.push(dogs[i])
            console.log(withLowercase)
        }
    }


    return (
        <>

        <h3>4.Šunys, kurie prasideda didžiąja raide, yra praleisti (neatvaizduoti).</h3>
        <div className="circle-container">
            {
                withLowercase.map((dog, i) => {
                    return i % 2 === 0 
                    ? <Square key={i} animal={dog} counter={count++} index={i} /> 
                    : <Circle key={i} animal={dog} counter={count++} index={i} />
                    })
            }
        
        </div>

        </>
    )

}