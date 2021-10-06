import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ContactAdd } from '../../actions/contactListActions';
import Service from '../../services/ApiServices';

// Import styles
import "./AddContact.css";


const AddContact = ( {ContactAdd, List} ) =>  {
    const history = useHistory();        

    let contact = {
        Id: uuidv4(),
        Name:"",
        Phone:"",
        Email:"",
        Gender:"",
        Status:"",
        Avatar:""
    }

    const createContact = async (e) => {
        e.preventDefault();
        const tmpList = [...List];
        tmpList.push(contact);
        ContactAdd(tmpList);
        await Service.UpdateList(tmpList);
        history.push("/");
    }

    let src;
    if ((contact.Avatar === null || contact.Avatar === "") || contact.Gender === "") {
            src = "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg"
        }
        else {
            src = `https://api.randomuser.me/portraits/${contact.Gender}/${contact.Avatar}.jpg`
        }

     return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={(e) => createContact(e)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input required type="text" className="form-control" name="Name" onChange={e => contact.Name = e.target.value} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone</label>
                                <input required type="tel" className="form-control" name="Phone" onChange={e => contact.Phone = e.target.value} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email1">Email address</label>
                                <input required type="text" className="form-control" aria-describedby="emailHelp" name="Email" onChange={e => contact.Email = e.target.value} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Status</label>
                                <select className="form-control" onChange={e => contact.Status = e.target.value} >
                                    <option defaultValue>Choose...</option>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                    <option value="Friends">Friends</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Gender</label>
                                <select className="form-control" onChange={e => contact.Gender = e.target.value} >
                                    <option defaultValue>Choose...</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Avatar">Avatar</label>
                                <input required type="number" min="0" max="99" name="Avatar" onChange={e => contact.Avatar = e.target.value} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary" >Add new contact</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={src} className="img-thumbnail avatar" alt="..." />
                    </div>
                </div>
            </div>
        )   
}

const mapStateToProps = ({ContactListReducer}) => {
    const { List } = ContactListReducer;
    return { List };
}

const mapDispatchToProps = ( {ContactAdd} );

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);