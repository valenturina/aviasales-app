import React from "react";
import './ticket.scss';
import s7logo from "../../S7 Logo.png";
import {formatFligthDate, priceFormatting, TransferTime, formatTime, declensionOfName, } from '../../formating'

const Ticket = ({ticket}) => {
    return(
        <li className='ticket'>
            <div className='ticket__content'>
                <header className='ticket__header'>
                    <h2 className='ticket__price'>{priceFormatting(ticket.price)}</h2>
                    <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="carrier logo"/>
                </header>
                <div className='ticket__info'>
                    <div className="ticket__info--time">
                        <div className="ticket__info--header">{ticket.segments[0].origin} - {ticket.segments[0].destination}</div>
                        <div>{TransferTime(ticket.segments[0].date, ticket.segments[0].duration)}</div>
                    </div>
                    <div className="ticket__info--pathtime">
                        <div className='ticket__info--header'>В пути</div>
                        <div>{formatTime(ticket.segments[0].duration)}</div>
                    </div>
                    <div className="ticket__indo--transfer">
                        <div className="ticket__info--header">{declensionOfName(ticket.segments[0].stops.length)}</div>
                        <div>{ticket.segments[0].stops.join(', ')}</div>
                    </div>
                </div>
                <div className='ticket__info'>
                    <div className="ticket__info--time">
                        <div className="ticket__info--header">{ticket.segments[1].origin} - {ticket.segments[1].destination}</div>
                        <div>{TransferTime(ticket.segments[1].date, ticket.segments[1].duration)}</div>
                    </div>
                    <div className="ticket__info--pathtime">
                        <div className='ticket__info--header'>В пути</div>
                        <div>{formatTime(ticket.segments[1].duration)}</div>
                    </div>
                    <div className="ticket__info--transfer">
                        <div className="ticket__info--header">{declensionOfName(ticket.segments[1].stops.length)}</div>
                        <div>{ticket.segments[1].stops.join(', ')}</div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Ticket;