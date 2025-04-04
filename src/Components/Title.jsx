//task 2
// Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

export default function Title(props){

        return (
            <h1>
                {props.titleText}
            </h1>
        )

}