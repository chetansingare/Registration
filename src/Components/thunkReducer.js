const thunkreducer = (intialState = {}, action) => {
    switch (action.type) {
        case "Postdata":
            return ({
                ...action.userData
            })        
        default:
            return intialState
    }
}

export default thunkreducer