import "./style.css"

export default function Footer({img, title, hour, date}){
    return(
        <footer className="foot">
            <div className="background">
                <div className="info-movie">
                    <img className="info-img-movie" src={img}/> 
                </div>
                <p>{title}
                <span>{date} {hour}</span>
                </p>
            </div>
        </footer>
    )
}