import React from 'react'

class NewMessage extends React.Component {
    state = {
        recipient: '',
        subject: '',
        body: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="new-message">
                <div className="new-message-header">
                    <div>New Message</div>
                    <div>
                        <span onClick={ this.props.hideNewMessage } style={{ 'cursor': 'pointer' }}>X</span>
                    </div>
                </div>

                <div className="new-message-body">
                    <form>
                        <input type="text" name="recipient" placeholder="To" onChange={ this.handleOnChange } value={ this.state.recipient }  />
                        <input type="text" name="subject" placeholder="Subject" onChange={ this.handleOnChange } value={ this.state.subject }  />
                        <textarea name="body" onChange={ this.handleOnChange } value={ this.state.body }></textarea>
                        <button className="btn btn-primary" style={{ 'fontSize': '15px' }}>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewMessage