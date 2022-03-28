
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../footer/Footer";
import TitlePag from "../titlePag/TitlePag";

import "./style.css";

export default function Reservation() {

    const { sessionID } = useParams();
    const [places, setPlaces] = useState([]);
    const [arrReserve, setArrReserve] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    const [numberSeats, setNumberSeats] = useState([]);


    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(response => {
            setPlaces(response.data)
        })
        promisse.catch(err => alert(err.response));
    }, [])

    function Seat(props) {
        const { seat, index } = props;
        const [selected, setSelected] = useState("");



        function changeColor() {
            if (selected === "") {
                setSelected("color-selected");
                console.log("selected")
            } else {
                setSelected("");
                console.log("vazio")
            }
        }

        return (
            <div onClick={() => {filterSeat(seat); changeColor()}} 
            className={seat.isAvailable === true ? `seat ${selected}` : "seat color-not-valid"} >{index + 1}</div>
        )
    }

    function filterSeat(seat) {
        if (seat.isAvailable === true) {
            const addRemove = arrReserve.find(e => e === seat.id)
            if (addRemove === undefined) {
                setNumberSeats([...numberSeats, seat.name])
                setArrReserve([...arrReserve, seat.id])
            } else {
                setArrReserve(
                    arrReserve.filter((item) => {
                        return item != seat.id;
                    })
                );
                setNumberSeats(
                    numberSeats.filter((item) => {
                        return item != seat.name;
                    })
                )
            }
        } else {
            alert("assento não disponível")
        }
    }

    function postReserve(e) {
        e.preventDefault();

        const post = {
            ids: arrReserve,
            name: name,
            cpf: cpf
        }
        let ticket = {
            seats: post,
            session: places,
            numberSeats: numberSeats
        };

        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", post);

        promisse.then(response => {
            navigate("/ticket", { state: ticket });
        })
        promisse.catch(response => {
            alert("deu ruim")
        })

    }


    if (Object.keys(places).length !== 0) {
        return (
            <main>
                <TitlePag title="Selecione os assentos" />
                <section className="seats">
                    {

                        places.seats.map((seat, index) => {
                            return (
                                <Seat seat={seat} index={index} />
                            )
                        })
                    }
                </section>

                <section className="description">
                    <div className="selected">
                        <div className="circle color-selected"> </div>
                        <p>Selecionado</p>
                    </div>
                    <div className="valid">
                        <div className="circle color-available"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="not-valid">
                        <div className="circle color-not-valid"></div>
                        <p>Indisponível</p>
                    </div>
                </section>

                <form className="data" onSubmit={postReserve}>
                    <div className="name">
                        <p>Nome do Comprador:</p>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Digite o seu nome"></input>
                    </div>
                    <div className="cpf">
                        <p>CPF do Comprador:</p>
                        <input type="number"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                            placeholder="Digite o seu CPF"></input>
                    </div>

                    <button type="submit" className="reserve-button">Reservar assento(s)</button>
                </form>
                <Footer img={places.movie.posterURL} hour={places.name} date={places.day.weekday} title={places.movie.title} />
            </main>
        )
    } else {
        return <h1>carregando</h1>
    }

}