import { Action } from "../actions"
const initialState = {
        number: 0
}
const counterReducer =  (state = initialState, action:Action) => {
    switch (action.type) {

    case 'decre':
        console.log('decre')
        return { ...state, number: state.number - 1}
    case 'incre':
        console.log('incre')
        return {...state, number: state.number + 1}

    default:
        return {...state}
    }
}

export default counterReducer
