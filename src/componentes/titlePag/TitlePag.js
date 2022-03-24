import "./TitlePag";

import "./style.css"

export default function TitlePag(props){

    return(
        <section className= {`title ${props.className}`}>
            <h1>{props.title}</h1>
        </section>
    )
}
