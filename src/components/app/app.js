import React, {useEffect, useState} from "react";
import logo from '../../Logoheader-logo.png';
import Sidebar from "../sidebar";
import Tabs from "../tabs";
import TicketsList from "../tickets-list";
import Spinner from "../spinner";

import './app.scss'

const App = () => {

    //const [searchId, setSearchId] = useState('')



    return (
        <div className='container'>
            <header className='page-header'> <img src={logo} alt="logo"/> </header>
            <section className='content'>
                <Sidebar/>
                <div className='tickets-block'>
                    <Tabs/>
                    <TicketsList/>
                    <div className="show-more">
                        <button className='show-more__btn'>показать еще 5 билетов</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;