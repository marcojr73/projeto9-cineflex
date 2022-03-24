import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../footer/Footer";
import TitlePag from "../titlePag/TitlePag";
import "./style.css";

export default function Time() {

    const { movieID } = useParams()

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promisse.then(response => {
            setSessions(response.data.days)
        })
    }, [])

    console.log(movieID)

    return (
        < main >
        <TitlePag title="Selecione o horário" />
        {
            sessions.map(session => {
                return (
                    <section className="date-time">
                        <div className="date">
                            <p>{session.weekday} - {session.date}</p>
                        </div>
                        <div className="container-time">
                            {
                                session.showtimes.map(time =>{
                                    return(
                                        <Link to="/reservation"> <div className="choice-time">{time.name}</div> </Link>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })
        }
        <Footer />
        </main >
    )
}