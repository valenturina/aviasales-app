import React, {useEffect, useState}  from "react";
import {useSelector} from "react-redux";
import './tickets-list.scss';
import s7logo from "../../S7 Logo.png";
import Ticket from "../ticket";

const TicketsList = ({load}) => {
    const allTickets = useSelector((state)=> state.tickets)
    const ticketsAmount = useSelector((state)=> state.showMore)
    const tabFilter = useSelector((state)=> state.filter)
    const sidebarFilter = useSelector((state)=> state.checkers.checkers)

    const [partTickets, setPartTickets] = useState([]);
    const [elements, setElements] = useState([]);

    const filterSidebar = (arr) => {
        if (sidebarFilter[0].active) {
            return arr;
        }
        if (sidebarFilter[1].active) {
            return arr.filter(item => item.segments[0].stops.length === 0 || item.segments[1].stops.length === 0)
        }
        if (sidebarFilter[2].active) {
            return arr.filter(item => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1)
        }
        if (sidebarFilter[3].active) {
            return arr.filter(item => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2 )
        }
        if (sidebarFilter[4].active) {
            return arr.filter(item => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3)
        }
        return [];
    }

    const filterTabs = (arr) => {
        if (tabFilter) {
            return arr.sort((a, b) => a.price - b.price)
        } else if (!tabFilter) {
            return arr.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
        }
        return arr;
    };

    useEffect(()=> {
        if (allTickets.length > 0) {
            setPartTickets(filterTabs([...(filterSidebar(allTickets)).slice(0, ticketsAmount)]))
        }
    }, [allTickets, ticketsAmount, tabFilter, sidebarFilter])

    useEffect(()=> {
        if (partTickets.length > 0) {
            setElements(partTickets.map((ticket) => <Ticket key={`${ticket.price}${ticket.carrier}`} ticket={ticket}/>))
        }
    }, [partTickets])

    if(!partTickets.length || !load) {
        return (
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '20px',
            }}>
                Рейсов, подходящих под заданные фильтры, не найдено.
            </div>
        )
    } else {
        return (
            <ul className='tickets-list'>
                {elements}
            </ul>
        )
    }
}

export default TicketsList;