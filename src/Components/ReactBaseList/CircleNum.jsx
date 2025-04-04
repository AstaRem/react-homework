
export default function CircleNum({stringL, numColor}) { 



    return (
        <>
                <div className="circle" style={{backgroundColor: numColor}} >
                    {stringL} 
                </div>

        </>
    );
}