//task 3
export default function Subtitle(props){
    const red = '#D84040';
    const blue = '#3674B5';

    let colorValue = props.colorNum == 1 ? red : blue;

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h2 style={{color: colorValue}}>Zebrai ir bebrai</h2>
                <p style={{color: colorValue, paddingLeft: '10px'}}>Paantraštės spalvos numeris: {props.colorNum}</p>

        </div>
    )
}