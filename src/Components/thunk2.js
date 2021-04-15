import axios from "axios"

function thunkGetAction() {
  return (dispatch) => {
    axios.get("http://localhost:8000/user").then(
      (resolve) => {
        const data = resolve.data
        dispatch({
          type: "Getdata",
          userData: data
        })
      },
      (reject) => {
        console.log(reject);
        dispatch({
          type: "rejected",
          status: reject.message
        })
      }
    )
  }
}

export default thunkGetAction