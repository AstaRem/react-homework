
export default function Circle({animal, counter, index}) { 



    return (
        <>
                <div className="circle" >{animal}
                    
                    <div>Nr. {counter} </div>
                    <div>Ind: {index} </div>
                
                
                </div>

        </>
    );
}