export const GetAllContacts = (ContactList) => {
    return {
        type: "GET_ALL_CONTACTS",
        payload: ContactList
    }
}

export const DeleteContact = (ContactList) => {
    return {
        type: "DELETE_CONTACT",
        payload: ContactList
    }
}

export const ContactAdd = (ContactList) => {
    return {
        type: "ADD_CONTACT",
        payload: ContactList
    }
}

export const EditContact = (ContactList) => {
    return {
        type: "EDIT_CONTACT",
        payload: ContactList
    }
}


