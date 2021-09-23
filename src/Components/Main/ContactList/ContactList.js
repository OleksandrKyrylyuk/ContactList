
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ List, onStateChange, onDelete, onGetCurrentIndex }) => {

    const contact = List.map(item => {
        return (<ContactItem key={item.Id} {...item}
            onStateChange={() => onStateChange(item.Id)}
            onDelete={() => onDelete(item.Id)}
            onGetCurrentIndex={() => onGetCurrentIndex(item.Id)} />)
    })

    return (

        <section>
            {contact.length > 0 ? contact : <p className="emptyList">Contact list is empty!</p>}
        </section>

    )
}

export default ContactList;