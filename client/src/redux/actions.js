import axios from 'axios'

export function getBox() {
    return async function(dispatch){
        var json = await axios.get('/boxes');
        return dispatch({
            type: GET_BOXES,
            payload: json.data
        })
    }
}