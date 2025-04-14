import React from 'react';
import './useRefTasks.css';


const Circles = React.forwardRef( ({backgroundC}, ref) => { 



    return (
        <div style={{backgroundColor: backgroundC}} ref={ref} className="circle-small">
            
            
   
        </div>
    );
});

export default Circles;