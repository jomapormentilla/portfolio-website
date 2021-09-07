import React from 'react'

class MessageBody extends React.Component {
    render(){
        return(
            <div className="message-body">
                <p>Subject: { this.props.email.subject } </p>
                <p>Sender: { this.props.email.sender } </p>
                <p>{ this.props.email.body }</p>
            </div>
        )
    }
}

export default MessageBody