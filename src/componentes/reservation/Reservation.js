import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../footer/Footer";
import TitlePag from "../titlePag/TitlePag";

import "./style.css";

export default function Reservation() {

    const { sessionID } = useParams();
    console.log(sessionID);
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(response => {
            setPlaces(response.data.seats)
        })
        promisse.catch(err => alert(err.response));
    }, [])


    function Seat(props){
        const {seat, index} = props;
        console.log(seat)
        // const [free, setFree] = useState(false);
        
        const css = seat.isAvailable === true ? `seat second` : "seat third"; 
            return(
                <div className={css}>{index + 1}</div>
            )
    }


    return (
        <main>
            <TitlePag title="Selecione os assentos" />
            <section className="seats">
                {
                    places.map((seat,index) => {
                        return(
                            <Seat seat={seat} index={index} />
                        )
                    })
                }
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
            <Footer />
        </main>
    )
}