import axios from "axios"


const deleteAction = (userData) => (dispatch) => {
  axios.delete(`http://localhost:8000/user/${userData.id}`).then(
    (deletedUser) => {
      dispatch({
        type: "deleted",
        userData: deletedUser.data,
      })
      dispatch({
        type: "setAppStatus",
        status: `${userData.name} deleted Successfully`
      })
    },
    (failtodelete) => {
      dispatch({
        type: "deletionFail",
        userData: failtodelete.message
      })
    }
  )
}

export default deleteAction