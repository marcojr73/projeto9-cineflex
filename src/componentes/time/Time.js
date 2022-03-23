import { Link, NavLink } from "react-router-dom";

import Footer from "../footer/Footer";
import "./style.css";

export default function Time(){
    return(
        <>
            <section className="date-time">
                <div className="date">
                    <p>Quinta-feira - 24/03/2022</p>
                </div>
                <div className="container-time">
                    <Link to="/reservation"> <div className="choice-time">15:00</div> </Link>
                    <Link to="/reservation"> <div className="choice-time">18:00</div> </Link>
                </div>
            </section>

            <section className="date-time">
                <div className="date">
                    <p>Quinta-feira - 24/03/2022</p>
                </div>
                <div className="container-time">
                    <Link to="/reservation"> <div className="choice-time">15:00</div> </Link>
                    <Link to="/reservation"> <div className="choice-time">18:00</div> </Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}