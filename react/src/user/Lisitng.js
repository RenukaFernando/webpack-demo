import React from 'react';
import {Link} from "react-router-dom";

export default class Listing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                List of Users here
                <ol>
                    <li><Link to="users/1"> Renuka </Link> </li>
                    <li><Link to="users/2"> Menuka </Link> </li>
                </ol>
            </div>
        );
    }
}