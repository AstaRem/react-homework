import CircleNum from './CircleNum.jsx';


export default function Dog3(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];




    return (
        <>

        <h3>5.Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.</h3>
        <div className="circle-container">
            {
                dogs.map((dog, i) => {  

                    let numColor;
                  
                    if(dog.length > 6){
                        numColor = '#5E8C61';
                    } else{
                        numColor = '#A61C3C';  
                    }
                    console.log(numColor);

                    return <CircleNum key={i} stringL={dog.length} numColor={numColor} />

                }
                    )
            }
        
        </div>

        </>
    )

}