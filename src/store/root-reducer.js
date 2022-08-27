import { combineReducers } from "redux";
import {checkersReducer} from "./checkers/checkers-reducer";
import {filterReducer}  from './filter/filter-reducer'

export const rootReducer = combineReducers({
    checkers: checkersReducer,
    filter: filterReducer
})