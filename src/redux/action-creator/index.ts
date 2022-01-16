import { Dispatch } from 'redux'

export const decre = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'decre'
        })
    }
}

export const incre = ()=>{
    return (dispatch: Dispatch)=>{
        dispatch({
            type: 'incre'
        })
    }
}
