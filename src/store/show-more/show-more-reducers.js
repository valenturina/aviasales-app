import {SHOW_FIVE_MORE} from './show-more-actions';


export const showMoreReducer = (state = 5, action ) => {
    switch (action.type) {
        case SHOW_FIVE_MORE: {
            return (state + 5)
        }
        default: {
            return state
        }
    }
}