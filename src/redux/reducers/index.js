import { combineReducers } from "redux";
import { FormReducers } from "./FormReducers";

const reducers=combineReducers({
    FORM:FormReducers
})
export default reducers