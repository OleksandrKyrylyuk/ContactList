
import { useEffect} from "react"
import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import Service from "../../../services/ApiServices";
import Spinner from "../../Spinner/spinner"

//importActions

import { GetAllContacts } from "../../../actions/contactListActions";

const ContactList = ( {List, GetAllContacts, SearchValue} ) => {
    useEffect(() => {
        Service.GetList()
            .then(data => GetAllContacts(data));
    },[GetAllContacts]);

   
  let searchData = List.filter( (el) => {
    return (el.Name.toLowerCase()).indexOf(SearchValue.toLowerCase()) > -1
    }
  );

    const contact = searchData.map(item => {
        return (<ContactItem key={item.Id} {...item}/>)
    })

    return (
        <section>
            {contact.length > 0 ? contact : <Spinner />}
        </section>
    )
}

const mapStateToProps = ( {ContactListReducer} ) => {
    const { List, SearchValue } = ContactListReducer;
    return { List, SearchValue                                                                                                                                                                                                                                                                                };
}

const mapDispatchToProps = ( {GetAllContacts} );

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);