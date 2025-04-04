//task 5
//Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

export default function SecondStoryDescription(props){

    return (
        <div style={{color: props.titleColor}}>
            <h1>{props.storyTitle}</h1>
            <h2>{props.storySubtitle}</h2>
        </div>
    )
}