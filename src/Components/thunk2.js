import axios from "axios"

function thunkGetAction() {
  return function get(dispatch){
    axios.get("http://localhost:8000/user").then(
      (resolve) => {
        const data = resolve.data
        dispatch({
          type: "Getdata",
          userData: data
        })
      },
      (reject) => {
        alert(reject.message)
        dispatch({
          type: "rejected",
          status: reject.message
        })
      }
    )
  }
}

export default thunkGetAction