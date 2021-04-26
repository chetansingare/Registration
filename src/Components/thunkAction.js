import axios from "axios"

function thunkAction(InitialData) {
  console.log(InitialData);
  return (dispatch) => {
    axios.post('http://localhost:8000/user', InitialData).then(
      (resolve) => {
        const data = resolve.data
        dispatch({
          type: "Postdata",
          userData: data
        })
        dispatch({
          type: "setAppStatus",
          status: data.Name + "created"
        })
      },
      (reject) => {
        dispatch({
          type: "rejected",
          status: reject.message
        })
      }
    )
  }
}

export default thunkAction