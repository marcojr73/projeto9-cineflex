import { Link } from "react-router-dom";
import TitlePag from "../titlePag/TitlePag";
import "./style.css"

export default function Ticket() {
    return (
        <main>
            <TitlePag className="color" title="Pedido feito com sucesso"/>
            <section className="info-time">
                <h1>Filme e sessão</h1>
                <p>Nome do filme</p>
                <p>data e hora do filme</p>
            </section>

            <section className="info-seat">
                <h1>Ingressos</h1>
                <p>assento reservado</p>
                <p>assento reservado</p>
            </section>

            <section className="client">
                <h1>Comprador</h1>
                <p>Nome: Nome do comprador</p>
                <p>CPF do comprador</p>
            </section>
            <Link to="/">
                <button className="back-home">Voltar para a home</button>
            </Link>
        </main>
    )
}