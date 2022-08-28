import { combineReducers } from "redux";
import {checkersReducer} from "./checkers/checkers-reducer";
import {filterReducer}  from './filter/filter-reducer';
import {showMoreReducer} from "./show-more/show-more-reducers";
import {ticketReducer} from './ticket/ticket-reducer'

export const rootReducer = combineReducers({
    checkers: checkersReducer,
    filter: filterReducer,
    showMore: showMoreReducer,
    tickets: ticketReducer
})