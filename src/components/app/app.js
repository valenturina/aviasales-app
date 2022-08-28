import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import logo from '../../Logoheader-logo.png';
import Sidebar from "../sidebar";
import Tabs from "../tabs";
import TicketsList from "../tickets-list";
import Spinner from "../spinner";

import {showMore} from "../../store/show-more/show-more-actions";


import './app.scss'
import {addTickets} from "../../store/ticket/ticket-actions";


const App = () => {
    const dispatch = useDispatch();

    const [ searchId, setSearchId] = useState('')
    const [ tickets, setTickets] = useState([])
    const [ stop, setStop ] = useState(false)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('https://aviasales-test-api.kata.academy/search')
            .then((res) => res.json())
            .then((res) => setSearchId(res.searchId))
            .catch(e => console.log(e.message))
    }, [])

    useEffect(() => {
        if (searchId && !stop) {
            function getTickets() {
                fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
                    .then(res => {
                        if (res.ok) {
                            return res.json()
                        } else {
                            throw new Error('something goes wrong')
                        }
                    })
                    .then(arr => {
                        setTickets([...tickets, ...arr.tickets])
                        setStop(arr.stop)
                    })
                    .catch((e) => {
                        console.log('Error: ' + e.message)
                        getTickets()
                    })
            }
            getTickets()
        }
    }, [searchId, tickets, stop,])

    useEffect(() => {

        dispatch(addTickets(tickets))
        if(stop) {
            setLoad(!load)
        }
    }, [stop, tickets])

    const showMoreTicket = () => {
        dispatch(showMore)
    }

    return (
        <div className='container'>
            <header className='page-header'> <img src={logo} alt="logo"/> </header>
            <section className='content'>
                <Sidebar/>
                <div className='tickets-block'>
                    <Tabs/>
                    {load? null: <Spinner/>}
                    <TicketsList load={load}/>
                    <div className="show-more">
                        <button
                            className='show-more__btn'
                            onClick={showMoreTicket}
                        >показать еще 5 билетов </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;