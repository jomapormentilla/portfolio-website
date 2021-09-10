import React from 'react'

class MessageBody extends React.Component {
    render(){
        return(
            <div className="message-body">
                <h1 className="display-6">{ this.props.email.subject } </h1>
                <p><i className="bi-person-circle"></i> { this.props.email.sender } </p>
                <div dangerouslySetInnerHTML={{ __html: this.props.email.body }} style={{ 'textAlign': 'left' }} />
                <div className="message-body-footer">
                    <button className="btn btn-light btn-lg" style={{ 'border': 'solid 1px #aaa' }}><i className="bi-reply-fill"></i> Reply</button>
                    <button className="btn btn-light btn-lg" style={{ 'border': 'solid 1px #aaa' }}><i className="bi-forward-fill"></i> Forward</button>
                </div>
            </div>
        )
    }
}

export default MessageBody