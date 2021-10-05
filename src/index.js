import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound"
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";


const App = () =>  {
        return (
                <Router>
                    <Switch>
                    <Provider store={store}>
                        <Route path="/" exact render={ () => <Main /> } />
                        <Route path="/new-contact" exact render={ () => <AddContact /> } />
                        <Route path="/edit-contact" exact render={ () => <EditContact /> } />
                        </Provider>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
        )
}

ReactDOM.render(<App />, document.getElementById("root"));