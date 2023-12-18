import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer, getDataReducer, BasicInfoReducer, ContactInfoReducer, ExperienceInfoReducer,SingleUserReducer,getAllReducer } from "./Components/Reducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
    usersReducer,
    getDataReducer,
    BasicInfoReducer,
    ContactInfoReducer,
    ExperienceInfoReducer,
    SingleUserReducer,
    getAllReducer
})
const midleware = [thunk]
const store = createStore(reducer, applyMiddleware(...midleware))
export default store