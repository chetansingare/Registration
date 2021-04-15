const thunkreducer = (intialState = {}, action) => {
    switch (action.type) {
        case "Postdata":
            return ({
                state: action.userData
            })
        default:
            return intialState
    }
}

export default thunkreducer