import React from "react";
import './ticket.scss';
import s7logo from "../../S7 Logo.png";

const Ticket = () => {
    return(
        <li className='ticket'>
            <div className='ticket__content'>
                <header className='ticket__header'>
                    <h2 className='ticket__price'>13 400 Р</h2>
                    <img src={s7logo} alt=""/>
                </header>
                <div className='ticket__info'>
                    <div className="ticket__info--time">
                        <div className="ticket__info--header">MOW - HKT</div>
                        <div>10:45 - 08:00</div>
                    </div>
                    <div className="ticket__info--pathtime">
                        <div className='ticket__info--header'>в пути</div>
                        <div>21ч 15м</div>
                    </div>
                    <div className="ticket__indo--transfer">
                        <div className="ticket__info--header">2 пересадки</div>
                        <div>hkg, jnb</div>
                    </div>
                </div>
                <div className='ticket__info'>
                    <div className="ticket__info--time">
                        <div className="ticket__info--header">MOW - HKT</div>
                        <div>11:20 - 00:50</div>
                    </div>
                    <div className="ticket__info--pathtime">
                        <div className='ticket__info--header'>в пути</div>
                        <div>13ч 30м</div>
                    </div>
                    <div className="ticket__info--transfer">
                        <div className="ticket__info--header">1 пересадка</div>
                        <div>hkg</div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Ticket;