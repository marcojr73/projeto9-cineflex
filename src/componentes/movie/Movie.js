import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TitlePag from "../titlePag/TitlePag";

import "./style.css";


export default function Movie() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(response => {
            setMovies(response.data);
        });
    }, []);

    
    
    return (
        <section className="main-movie">
            <TitlePag title="Selecione o filme"/>
            <figure className="list-movies">
                {movies.map(movie => {
                    return (
                        <Link to={`/time${movie.id}`}>
                            <img className="banner-movie" src={movie.posterURL} />
                        </Link>
                    )
                })}
            </figure>
        </section >
    )
}