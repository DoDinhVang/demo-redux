import { combineReducers, createStore} from "redux";
import counterReducer from "./reducers/counterReducer"


const rootReducer = combineReducers({
    counterReducer
})
export default rootReducer
export type State = ReturnType<typeof rootReducer>
 
 




