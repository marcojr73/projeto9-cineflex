import { BrowserRouter, Routes, Route } from "react-router-dom";

import Top from "../top/Top";
import TitlePag from "../titlePag/TitlePag";
import Movie from "../movie/Movie"
import Time from "../time/Time"
import Reservation from "../reservation/Reservation";
import Ticket from "../ticket/Ticket"


export default function App(){
    return(
        <BrowserRouter>
            <Top/>
            <TitlePag/>
            <Routes>
                <Route path="/" element={<Movie />}></Route>
                <Route path="/time" element={<Time />}></Route>
                <Route path="/reservation" element={<Reservation />}></Route>
                <Route path="/ticket" element={<Ticket />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

