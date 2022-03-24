import { BrowserRouter, Routes, Route } from "react-router-dom";

import Top from "../top/Top";
import Movie from "../movie/Movie"
import Time from "../time/Time"
import Reservation from "../reservation/Reservation";
import Ticket from "../ticket/Ticket"


export default function App(){
    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Movie />}></Route>
                <Route path="/time:movieID" element={<Time />}></Route>
                <Route path="/reservation:sessionID" element={<Reservation />}></Route>
                <Route path="/ticket" element={<Ticket />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

