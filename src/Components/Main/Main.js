import ContactList from "./ContactList/ContactList";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";

const Main = ({ List, onStateChange, onDelete, onGetCurrentIndex }) => {
    let friendCounter = 0
    let privateCounter = 0
    let workCounter = 0
    let familyCounter = 0

    for (let i = 0; i < List.length; i++) {
        if (List[i].Status === "Friend") {
            friendCounter++;
        }
        else if (List[i].Status === "Private") {
            privateCounter++;
        }
        else if (List[i].Status === "Work") {
            workCounter++;
        }
        else if (List[i].Status === "Family") {
            familyCounter++;
        }
    }
    const contactCounter = List.length;

    return (
        <div className="container bootstrap snippets bootdeys bootdey">
            <div className="row decor-default">
                <SideBar familyCounter={familyCounter} workCounter={workCounter} privateCounter={privateCounter} friendCounter={friendCounter} contactCounter={contactCounter} />

                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="contacts-list">
                        <Link to="/new-contact" className="title">Add Contacet</Link>

                        <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                            <div className="input-group">
                                <input type="text" className="contacts-list-search" placeholder="Search" />
                            </div>
                            <div className="unit head">
                                <div className="field name">
                                    <div className="check">
                                        <input id="cb1" name="cb1" type="checkbox" />
                                        <label htmlFor="cb1"></label>
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                                    Name
                </div>
                                <div className="field phone">
                                    Phone
                </div>

                            </div>
                            <ContactList onGetCurrentIndex={onGetCurrentIndex} List={List} onDelete={onDelete} onStateChange={onStateChange} />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;