import React, {useState, useEffect} from "react";
import './tabs.scss';
import {useDispatch, useSelector} from "react-redux";
import {sortTickets} from "../../store/filter/filter-actions";

const Tabs = () => {

    const allTabs = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const [cheapest, setCheapest] = useState('active')
    const [fastest, setFastest] = useState('')

    useEffect(()=> {
        if (allTabs) {
            setCheapest('tab-active')
            setFastest('')
        } else {
            setCheapest('')
            setFastest('tab-active')
        }
    }, [allTabs])


    return (
        <div className='tabs'>
            <div
                className={`tab ${cheapest}`}
                onClick={()=> dispatch(sortTickets(true))}
            >
                Самый дешевый
            </div>
            <div
                className={`tab ${fastest}`}
                onClick={()=> dispatch(sortTickets(false))}
            >
                Самый быстрый
            </div>
        </div>
    )


    // const filterTabs = [...allTabs].map(({label, id, active})=> {
    //     let className = 'tab';
    //
    //     if (active) {
    //         className += ' tab-active'
    //     }
    //
    //     const handleFilter = () => {
    //         const newArr = [...allTabs].map((el)=> {
    //             if (el.id === id) {
    //                 el.active = true
    //             } else {
    //                 el.active = false
    //             }
    //             return el;
    //         })
    //         dispatch(sortTickets(newArr))
    //     }
    //     return (
    //
    //         <div
    //             key={id}
    //             id={id}
    //             className={className}
    //             onClick={handleFilter}
    //         >
    //             {label}
    //         </div>
    //     )
    // })
    // return (
    //     <div className='tabs'>
    //         {filterTabs}
    //     </div>
    // )
}

export default Tabs;