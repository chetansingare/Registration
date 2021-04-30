
const Mode = {
    data: {},
    Mode: ""
}

const editReducer = (state = Mode, action) => {
    console.log(
        'action = ',action
    );
    switch (action.type) {
        case "EditMode":
            console.log("editmode");
            return ({
                ...state,
                Mode: action.type,
                data: action.data
            })
        case "userEdited":
            return ({
                ...state,
                Mode: "Edited",
                data: action.data
            })
        case "cancel":
            return Mode
        default:
            return state
    }
}

export default editReducer