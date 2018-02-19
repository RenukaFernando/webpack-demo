import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import User from "./User";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/users">User</Link></li>
                        </ul>


                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/users" component={User}/>
                            </Switch>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}