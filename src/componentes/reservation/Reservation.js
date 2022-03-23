import { Link } from "react-router-dom";

import Footer from "../footer/Footer";

import "./style.css";

export default function Reservation(){
    return(
        <>
        <section className="seats">
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div><div className="seat">1</div>
            <div className="seat">1</div><div className="seat">1</div>
        </section>

        <section className="description">
            <div className="selected">
                <div className="circle first"> </div>
                 <p>Selecionado</p>
            </div>
            <div className="valid">
                <div className="circle second"></div>
                <p>Disponível</p> 
            </div>
            <div className="not-valid">
                <div className="circle third"></div>
                 <p>Indisponível</p>
            </div>
        </section>
        <section className="data">
            <div className="name">
                <p>Nome do Comprador:</p>
                <input type="text" placeholder="Digite o seu nome"></input>
            </div>
            <div className="cpf">
                <p>CPF do Comprador:</p>
                <input type="number" placeholder="Digite o seu CPF"></input>
            </div>
        </section>

        <Link to="/ticket"><button className="reserve-button">Reservar assento(s)</button></Link>
        <Footer/>
        </>
    )
}