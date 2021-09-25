import ReactDOM from "react-dom";
import { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
// Import styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound"
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {
   
    

    

    state = {
        List: [
            {
                Id: uuidv4(),
                Name: "Alexander Verdnam",
                Phone: "+1-800-600-9898",
                Email: "example@gmail.com",
                Gender: "lego",
                Status: "Friend",
                Avatar: 4
            },
            {
                Id: uuidv4(),
                Name: "Camilla Terry",
                Phone: "+1-800-456-5890",
                Email: "camt@gmail.com",
                Gender: "women",
                Status: "Private",
                Avatar: 16
            },
            {
                Id: uuidv4(),
                Name: "Evan Piters",
                Phone: "+1-457-090-2345",
                Email: "evan@gmail.com",
                Gender: "men",
                Status: "Work",
                Avatar: 33
            }
        ],
        CurrentContact: "",
        SearchValue: ""
    }

    onStateChange = (Id) => {

        const index = this.state.List.findIndex(elem => elem.Id === Id);
        const contact = this.state.List[index];

        switch (contact.Status) {
            case "Friend": contact.Status = "Work"; break;
            case "Work": contact.Status = "Family"; break;
            case "Family": contact.Status = "Private"; break;
            case "Private": contact.Status = "Friend"; break;
            default:
        }

        const tmpList = this.state.List.slice();
        tmpList[index] = contact;

        this.setState({
            List: tmpList
        })
    }

    onDelete = (Id) => {
        const index = this.state.List.findIndex(elem => elem.Id === Id);
        let tmpList = this.state.List.slice();
        const partOne = tmpList.slice(0, index);
        const partTwo = tmpList.slice(index + 1);
        tmpList = [...partOne, ...partTwo];
        this.setState({
            List: tmpList
        })

    }

    onAddNewContact = (newContact) => {
        let tmpList = this.state.List.slice();
        tmpList.unshift(newContact);
        this.setState({
            List: tmpList
        })
    }

    onGetCurrentIndex = (Id) => {
        const index = this.state.List.findIndex(elem => elem.Id === Id);
        const currentContact = this.state.List[index];
        this.setState({
            CurrentContact: currentContact
        })
    }

    onEditContact = (editedContact) => {
        const index = this.state.List.findIndex(elem => elem.Id === editedContact.Id);
        const tmp = [...this.state.List.slice(0, index), editedContact, ...this.state.List.slice(index + 1) ]
        this.setState({
            List: tmp
        });

    }

    onSearch = (search) => {
       console.log(search);
        return this.setState({SearchValue: search});
    }

    render() {
        const { CurrentContact, SearchValue } = this.state;
        const visibleItem = this.state.List.filter( ({Name}) => Name.toLocaleLowerCase().indexOf(SearchValue.toLocaleLowerCase()) > - 1 );
        
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => (<Main onGetCurrentIndex={this.onGetCurrentIndex} onSearch={this.onSearch} List={visibleItem} onDelete={this.onDelete} onStateChange={this.onStateChange} />
                        )} />
                        <Route path="/new-contact" exact render={() => (<AddContact onAddNewContact={this.onAddNewContact} />)} />
                        <Route path="/edit-contact" exact render={() => <EditContact onEditContact={this.onEditContact} CurrentContact={CurrentContact} />} />
                        <Route component={NotFound} />
                    </Switch>


                </Router>

            </Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));