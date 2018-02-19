import React from 'react';

export default class Details extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const userId = this.props.match.params.userId;
        return(
            <div>
                <h2>{`Details of the user with user id: ${userId}`}</h2>
                <p>Name of the user</p>
            </div>
        )
    }
}