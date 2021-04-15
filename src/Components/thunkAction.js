import axios from "axios"

export function thunkAction(InitialData) {
  console.log(InitialData);
  return (dispatch) => {
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
          type: "rejected",
          status: reject.message
        })
      }
    )
  }
}

export function thunkAction2() {
  return (dispatch) => {
    axios.get('http://localhost:8000/user').then(
      (resolve) => {
        const data = resolve.data
        dispatch({
          type: "Getdata",
          userData: data
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