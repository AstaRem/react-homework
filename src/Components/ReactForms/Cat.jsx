import paw from '../../assets/paw.png';

export default function Cat({cats}){

    return (
        <div>{
            [...cats].sort((a, b) => Number(b.weight) - Number(a.weight)).map((cat, index) => (
                <div key={index} style={{display: "flex", flefDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'10px'}}>
                        <img src={paw} alt='Pawprint' style={{width: '30px', }} />
                    </div>
    
                    <div className="cat-details" style={{display: 'flex', justyfyContent: 'flex-start', gap: '10px'}}>
                        <p style={{marginBottom: '5px', padding: '0'}}>Vardas: {cat.name}, </p>
                        <p style={{marginBottom: '5px', padding: '0'}}>Svoris: {cat.weight}kg</p>
                    </div>
    
    
            </div>
    
            ) )

            }

            <div>
                <p style={{fontWeight: '600', marginTop: '30px'}}> Bendras katinukų svoris:&nbsp;
                { 
                [...cats].reduce((a, b) => a + Number(b.weight), 0)
                }
                &nbsp;kg
                </p>

                </div>
                
        </div>

    )
}