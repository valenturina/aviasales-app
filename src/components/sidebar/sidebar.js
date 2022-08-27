import React from "react";
import './sidebar.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getCheckers} from '../../store/checkers/checkers-actions'


const Sidebar = () => {
    let count = 0;
    const dispatch = useDispatch();

    const checkboxList = useSelector((state)=> state.checkers.checkers)


    const filteredCheckbox = [...checkboxList].map(({label, id, active}) => {
        if (active) count += 1;

        const handleChecker = (e) => {
            const newArr = [...checkboxList];
            if (id === 'all' && active === false) {
                newArr.map((el) => {
                    el.active = true;
                    return el
                })
            }
            if (id === 'all' && active === true) {
                newArr.map((el) => {
                    el.active = false;
                    return el
                })
            }
            if ( id !== 'all') {
                newArr.map((el)=> {
                    if(el.id===id) {
                        el.active = e.target.checked;
                        if (!e.target.checked) count -= 1
                    }
                    if (el.id === 'all') {
                        el.active = false
                    }
                    return el;
                })
            }
            if (count === 3 && id !=='all') {
                newArr.map((el) =>{
                    el.active = true;
                    return el
                })
            }
            dispatch(getCheckers(newArr))
        }
        return (
            <label
                key={id}
                className='sidebar__item'
                >
                <input
                    id={id}
                    type="checkbox"
                    className='input visually-hidden'
                    checked={active}
                    onChange={(e)=> handleChecker(e)}
                />
                <span className='sidebar__checker'/>
                <span className='sidebar__label'>{label}</span>

            </label>
        )
    })

    return (
        <nav className='sidebar'>
            <h3 className='sidebar__header'>количество пересадок</h3>
            <form className='sidebar__filters'>
                {filteredCheckbox}
            </form>
        </nav>
    )
}

export default Sidebar;