function snackReducer(state = "", action) {
    console.log("Yaha to aaya",action.type);
    switch (action.type) {
        case "setAppStatus":
            return state = action.status
        case "clean":
            return state = ""
        default:
            return state
    }
}
export default snackReducer