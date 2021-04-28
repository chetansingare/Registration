import axios from "axios"

const updateUser = (id, data) => (dispatch) => {
    axios.put("http://localhost:8000/user/" + id, data).then(
        (updateduser) => {
            dispatch({
                type: "userEdited",
                data: updateduser.data
            })
            dispatch({
                type: "setAppStatus",
                status: `${updateduser.data.name} edited successfully`
            })
        },
        (reject) => {
            dispatch({
                type: "userEditedFailed",
                data: reject.message
            })
        }
    )
}

const edit = (data) => ({
    type: "EditMode",
    data: data
})

const cancel = () => ({
    type: "cancel"
})

export { edit, cancel, updateUser }