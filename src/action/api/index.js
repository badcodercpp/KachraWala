// thunk action example
import {FETCH} from "./call.js";

export const DUMMY_API_CALL = (action,mandatory) =>{
    return dispatch => {
        return FETCH(mandatory.type, mandatory.url)
        .then(data=>{
            dispatch(action)
            alert(data)
        },
    error=>{
        dispatch(error)
        alert(error)
    })
      }
}
  