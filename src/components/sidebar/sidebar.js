import React from "react";
import './sidebar.scss';
import {useDispatch} from 'react-redux';
import {getCheckers} from '../../store/checkers/checkers-actions'


const Sidebar = () => {
    const dispatch = useDispatch();

    const handleChecker = (e) => {
        const checker = e.target;
        dispatch(getCheckers(checker.id, checker.checked))
    }

    return (
        <nav className='sidebar'>
            <h3 className='sidebar__header'>количество пересадок</h3>
            <form className='sidebar__filters'>
                <label className='sidebar__item'>
                    <input
                        id='all'
                        type="checkbox"
                        className='input visually-hidden'
                        onClick={(e)=> handleChecker(e)}
                    />
                    <span className='sidebar__checker'/>
                    <span className='sidebar__label'>все</span>

                </label>
                <label className='sidebar__item'>
                    <input
                        id='none'
                        type="checkbox"
                        className='input visually-hidden'
                        onClick={(e)=> handleChecker(e)}
                    />
                    <span className='sidebar__checker'/>
                    <span className='sidebar__label'>без пересадок</span>

                </label>
                <label className='sidebar__item'>
                    <input
                        id='one'
                        type="checkbox"
                        className='input visually-hidden'
                        onClick={(e)=> handleChecker(e)}
                    />
                    <span className='sidebar__checker'/>
                    <span className='sidebar__label'>1 пересадка</span>

                </label>
                <label className='sidebar__item'>
                    <input
                        id='two'
                        type="checkbox"
                        className='input visually-hidden'
                        onClick={(e)=> handleChecker(e)}
                    />
                    <span className='sidebar__checker'/>
                    <span className='sidebar__label'>2 пересадки</span>

                </label>
                <label className='sidebar__item'>
                    <input
                        id='three'
                        type="checkbox"
                        className='input visually-hidden'
                        onClick={(e)=> handleChecker(e)}
                    />
                    <span className='sidebar__checker'/>
                    <span className='sidebar__label'>3 пересадки</span>

                </label>
            </form>
        </nav>
    )
}

export default Sidebar;