
import { useEffect} from "react"
import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import Service from "../../../services/ApiServices";

//importActions

import { GetAllContacts } from "../../../actions/contactListActions";

const ContactList = ( {List, GetAllContacts, SearchValue} ) => {
    console.log(SearchValue);
    useEffect(() => {
        Service.GetList()
            .then(data => GetAllContacts(data));
    },[GetAllContacts]);

   
  const searchData = List.filter( (el) => {
    //   el.Name.toLowerCase().indexOf(SearchValue.toLowerCase()) > 1
    console.log(SearchValue.toLowerCase().indexOf(SearchValue.toLowerCase()));
    }
  );
  console.log(searchData);

    const contact = List.map(item => {
        return (<ContactItem key={item.Id} {...item}/>)
    })

    return (
        <section>
            {contact.length > 0 ? contact : <p className="emptyList">Contact list is empty!</p>}
        </section>
    )
}

const mapStateToProps = ( {ContactListReducer} ) => {
    const { List, SearchValue } = ContactListReducer;
    return { List, SearchValue                                                                                                                                                                                                                                                                                     };
}

const mapDispatchToProps = ( {GetAllContacts} );

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);