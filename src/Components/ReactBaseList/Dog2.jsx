import Square from './Square.jsx';
import Circle from './Circle.jsx';


export default function Dog2(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    let count = 1;
    // let sortedDogs = [...dogs];
    // sortedDogs = dogs.sort((one, two) =>  two.length - one.length);

    // console.log(sortedDogs);
    console.log(dogs);
    const sortedDogs = [...dogs].sort((one, two) =>  two.length - one.length);
    console.log(dogs);
    console.log(sortedDogs);


    // const[count, setCount] = useState(1);

    // const counting = () => {
    //     setCount(previous => previous + 1)
    // }
    return (
        <>

        <h3>3. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.</h3>
        <div className="circle-container">
            {
                sortedDogs.map((dog, i) => <Circle key={i} animal={dog} counter={count++} index={i}/> )
            }
        </div>

        </>
    )

}