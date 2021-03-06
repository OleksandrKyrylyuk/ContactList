import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../actions/contactListActions";
import Service from '../../../../services/ApiServices';

const ContactItem = ({ Id , Name, Avatar, Phone, Email, Status, Gender, List, DeleteContact, ContactEdit, EditContactList}) => {
    const image = `https://api.randomuser.me/portraits/${Gender}/${Avatar}.jpg`
     const index = List.findIndex( el => el.Id === Id);
    let statusColor = "";
    switch (Status) {
        case "Friend": statusColor = "lab lab-warning"; break;
        case "Work": statusColor = "lab lab-success"; break;
        case "Family": statusColor = "lab lab-primary"; break;
        case "Private": statusColor = "lab lab-danger"; break;
        default:
    }

    const changeStatus = ( status ) => {
       switch (status) {
        case "Friend": return "Work";
        case "Work": return "Family"
        case "Family": return "Private"
        case "Private": return "Friend"
        default:
       }
    }

   
    const onDelete = async () => {
        const tmpList = [...List.slice(0, index), ...List.slice(index + 1)];
        DeleteContact(tmpList);
        await Service.UpdateList(tmpList);
    }

    const onStatusChange = async () => {
        const contact = List[index];
        contact.Status = changeStatus(contact.Status);
        const tmp = [...List.slice(0, index), contact , ...List.slice(index + 1)];
        EditContactList(tmp);
        await Service.UpdateList(tmp);
    }
      return (

        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={image} alt="Contact foto" className="avatar" /> {Name}
                </div>
                <div className={statusColor} onClick={() => onStatusChange()} >{Status}</div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className="contactIcons">
                <Link to="/edit-contact">
                    <i className="far fa-edit fa-2x" 
                       onClick={ () => {ContactEdit(Id)} } ></i>
                </Link>
                <i className="far fa-trash-alt fa-2x" onClick={ onDelete }></i>
            </div>
        </div>
    )
}

const mapStateToProps = ({ContactListReducer}) => {
    const { List, CurrentContact } = ContactListReducer;
    return { List, CurrentContact };
}



export default connect(mapStateToProps, actions)(ContactItem);