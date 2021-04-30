function getReducer(state = [], action) {
    switch (action.type) {
        case "Getdata":
            return ([
                ...action.userData
            ])
        default:
            return state
    }
}

export default getReducer