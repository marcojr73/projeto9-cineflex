import { useLocation, Link } from "react-router-dom";
import TitlePag from "../titlePag/TitlePag";
import "./style.css"

export default function Ticket() {
    const { state } = useLocation();
    console.log(state);

    return (
        <main>
            <TitlePag className="color" title="Pedido feito com sucesso"/>
            <section className="info-time">
                <h1>Filme e sessão</h1>
                <p>{state.session.movie.title}</p>
                <p>{state.session.day.date} {state.session.name}</p>
            </section>

            <section className="info-seat">
                <h1>Ingressos</h1>
                {
                    state.numberSeats.map(seat => {
                        return(
                            <p>assento {seat}</p>
                        )
                    })
                }
            </section>

            <section className="client">
                <h1>Comprador</h1>
                <p>Nome: {state.seats.name}</p>
                <p>CPF: {state.seats.cpf}</p>
            </section>
            <Link to="/">
                <button className="back-home">Voltar para a home</button>
            </Link>
        </main>
    )
}