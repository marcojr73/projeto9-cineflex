import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

    const {state} = useLocation()
    console.log(state)

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
                                        <Link to={`/reservation${time.id}`}> <div className="choice-time">{time.name}</div> </Link>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })
        }
        <Footer img={state.img} title={state.title} />
        </main >
    )
}