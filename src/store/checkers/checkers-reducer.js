import {GET_CHECKERS} from './checkers-actions';

const initialState = {
    checkers: [
        {label: 'Все', id: 'all', active: false},
        {label: 'Без пересадок', id: 'none', active: false},
        {label: '1 пересадка', id: 'one', active: false},
        {label: '2 пересадки', id: 'two', active: false},
        {label: '3 пересадки', id: 'three', active: false}
    ]
}
export const checkersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHECKERS: {
            return {...state, checkers: action.payload}
        }
        default: {
            return state
        }
    }
}