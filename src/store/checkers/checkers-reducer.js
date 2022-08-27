import {GET_CHECKERS} from './checkers-actions';

export const checkersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CHECKERS: {
            return {...state, [action.id]: action.checked}
        }
        default: {
            return state
        }
    }
}