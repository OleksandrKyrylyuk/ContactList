export const GetAllContacts = (ContactList) => {
    return {
        type: "GET_ALL_CONTACTS",
        payload: ContactList
    }
}