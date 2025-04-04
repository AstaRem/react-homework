//task 4
// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage

export default function StoryDescription(props){

    return (
        <div style={{color: '#626F47'}}>
            <h1>{props.storyTitle}</h1>
            <h2>{props.storySubtitle}</h2>
        </div>
    )
}