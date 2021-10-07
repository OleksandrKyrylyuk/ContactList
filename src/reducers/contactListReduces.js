const initState = {
    List: [],
    CurrentContact:"",
    SearchValue: ""
}

const ContactListReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_ALL_CONTACTS":
             return {
                 ...state,
                 List: action.payload
             }

        case "DELETE_CONTACT":
             return {
                 ...state,
                 List: action.payload
             }

        case "ADD_CONTACT":
             return {
                 ...state,
                 List: action.payload
             }

        case "EDIT_CONTACT":
             return {
                 ...state,
                 CurrentContact: action.payload
             }
        
        case "EDIT_CONTACT_LIST":
             return {
                 ...state,
                 List: action.payload
             }

        default:
            return state;
    }
}

export default ContactListReducer;