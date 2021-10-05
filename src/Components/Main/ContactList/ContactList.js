
import { useEffect } from "react"
import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import Service from "../../../services/ApiServices";

//importActions

import { GetAllContacts } from "../../../actions/contactListActions";

const ContactList = ( {List, GetAllContacts} ) => {

    useEffect(() => {
        Service.GetList()
            .then(data => GetAllContacts(data) )
    },[0]);

    const contact = List.map(item => {
        return (<ContactItem key={item.Id} {...item}
            onStateChange={() => {}}
            onDelete={() => {}}
            onGetCurrentIndex={() => {} }/>)
    })

    return (
        <section>
            {contact.length > 0 ? contact : <p className="emptyList">Contact list is empty!</p>}
        </section>
    )
}

const mapStateToProps = ( {ContactListReducer} ) => {
    const { List } = ContactListReducer;
    return { List };
}

const mapDispatchToProps = ( {GetAllContacts} );

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);