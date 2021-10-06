const initState = {
    List: [],
    CurrentContact: "",
    SearchValue: ""
}

const ContactListReducer = (state = initState, action) => {
    console.log("ContactListReducer", action.payload);
    
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
                 List: action.payload
             }
        default:
            return state;
    }
}

export default ContactListReducer;