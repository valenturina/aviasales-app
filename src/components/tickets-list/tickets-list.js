import React from "react";
import './tickets-list.scss';
import s7logo from "../../S7 Logo.png";
import Ticket from "../ticket";

const TicketsList = () => {
    return (
        <ul className='tickets-list'>
            <Ticket/>
        </ul>
    )
}

export default TicketsList;