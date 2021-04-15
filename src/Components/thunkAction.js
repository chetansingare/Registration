import axios from "axios"

function thunkAction(InitialData){

    return (dispatch, getState) => {
        axios.post('http://localhost:8000/user', InitialData).then(
            (resolve) => {
                const data = resolve.data
                dispatch({
                    type: "Postdata",
                    userData: data
                })                
            },
            (reject) => {
                dispatch({
                    type:"rejected",
                    status : reject.message
                })
            }
        )
    }
}

export default thunkAction