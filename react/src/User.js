import React from 'react';

export default class User extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>User</h3>
                <p>Name of the user</p>
            </div>
        );
    }
}