import {SORT_TICKETS} from './filter-actions';
// const initialState = {
//     tabs: [
//         {label: 'Самый дешевый', id: 'cheapest', active: false},
//         {label: 'Самый быстрый', id: 'fastest', active: false}
//     ]
// }
export const filterReducer = (state = true, action) => {
    switch (action.type) {
        case SORT_TICKETS: {
            // return {...state, tabs: action.payload}
            return action.payload
        }
        default: {
            return state
        }
    }
}