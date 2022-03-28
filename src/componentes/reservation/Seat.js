import { useState } from "react";

export default function Seat(props) {
    const { seat, index, filterSeat } = props;
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