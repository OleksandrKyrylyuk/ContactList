import { connect } from 'react-redux';


const SideBar = ({ List }) => {
    let privateCounter = List.filter(el => el.Status === "Private").length;
    let friendCounter = List.filter(el => el.Status === "Friend").length;
    let workCounter = List.filter(el => el.Status === "Work").length;
    let familyCounter = List.filter(el => el.Status === "Family").length;


    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{List.length}</span></div>
                <div className="list">
                    <div className="input-group">
                        <input type="text" className="contacts-search" placeholder="Search" />
                    </div>
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>{workCounter}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>{familyCounter}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>{privateCounter}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>{friendCounter}</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( {ContactListReducer} ) => {
    const { List } = ContactListReducer;
    return { List };
}

export default connect(mapStateToProps)(SideBar);