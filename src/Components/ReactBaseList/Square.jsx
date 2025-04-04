
export default function Square({animal, counter, index}) { 



    return (
        <div className="square" >
            {animal}
            
            <div>Nr. {counter} </div>
            <div>Ind: {index} </div>
   
        </div>
    );
}