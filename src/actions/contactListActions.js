export const GetAllContacts = (ContactList) => {
    return {
        type: "GET_ALL_CONTACTS",
        payload: ContactList
    }
};

export const DeleteContact = (ContactList) => {
    return {
        type: "DELETE_CONTACT",
        payload: ContactList
    }
};

export const ContactEdit = (ContactItemId) => {
    return {
        type: "EDIT_CONTACT",
        payload: ContactItemId
    }
};



export const ContactAdd = (ContactList) => {
    return {
        type: "ADD_CONTACT",
        payload: ContactList
    }
};

export const EditContactList = (ContactList) => {
    return {
        type: "EDIT_CONTACT_LIST",
        payload: ContactList
    }
};

export const SetSearchValue = (value) => {
    return {
        type: "SET_SEARCH_VALUE",
        payload: value
    }
};

