import React from 'react';
import {Route, Switch} from "react-router-dom";
import Listing from "./user/Lisitng";
import Details from "./user/Details";

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                <Switch>
                    <Route path="/users" exact component={Listing}/>
                    <Route path="/users/:userId" component={Details}/>
                </Switch>
            </div>
        );
    }
}
