import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react'; 
import * as actions from "../../actions/contactListActions"
import Service from '../../services/ApiServices';

const EditContact = ( {List, CurrentContact, EditContactList}  ) => {
        const index = List.findIndex(el => el.Id === CurrentContact);
        let { Id, Name, Avatar, Phone, Email, Status, Gender } = List[index];

        const [ava, setAva] = useState(Avatar);
        const [gen, setGen] = useState(Gender);

        const history = useHistory();
        let avatarNumber = `https://api.randomuser.me/portraits/${gen}/${ava}.jpg`;

        const onEdit = async () => {
            const contact = {  Name, Avatar:ava, Phone, Id, Email, Status, Gender:gen  };
            const tmp = [...List.slice(0, index), contact , ...List.slice(index + 1)];
            EditContactList(tmp);
            await Service.UpdateList(tmp);
           history.push("/");
        }

        const onAvatarChange = (e) => {
            Avatar = e.target.value;
            setAva(Avatar);
        }

        const onGenderChange = (e) => {
            Gender = e.target.value;
            setGen(Gender);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <form >
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input required type="text" className="form-control" defaultValue={Name} name="Name" onChange={(e) => {Name = e.target.value}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Phone</label>
                                <input required type="tel" className="form-control" defaultValue={Phone} name="Phone" onChange={(e) => {Phone = e.target.value}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email1">Email address</label>
                                <input required type="email" className="form-control" defaultValue={Email} aria-describedby="emailHelp" name="Email" onChange={(e) => {Email = e.target.value}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Status</label>
                                <select className="form-control" defaultValue={Status} onChange={(e) => {Status = e.target.value}}  >
                                    <option defaultValue>Choose...</option>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                    <option value="Friends">Friends</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Gender</label>
                                <select className="form-control" defaultValue={Gender} onChange={(e) => {onGenderChange(e)}} >
                                    <option defaultValue>Choose...</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Avatar">Avatar</label>
                                <input required type="number" min="0" max="99" defaultValue={Avatar} name="Avatar" onChange={(e) => {onAvatarChange(e)}} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <button type="button" onClick={() => {onEdit()}} className="btn btn-primary">Save</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={avatarNumber} className="img-thumbnail avatar" alt="..." />
                    </div>
                </div>
            </div>
        )
    

}

const mapStateToProps = ( {ContactListReducer} ) => {
    const { List, CurrentContact } = ContactListReducer;
    return { List, CurrentContact };
}


export default connect(mapStateToProps, actions)(EditContact);