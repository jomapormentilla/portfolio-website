import React from 'react'

import MessagesTabs from './MessagesTabs'
import MessagesRows from './MessagesRows'
import MessageBody from './MessageBody'

class MessagesContainer extends React.Component {
    render(){
        return(
            <div className="messages-container-jomail">
                <MessagesTabs emails={ this.props.filtered } />
                { !!this.props.showEmail ? 
                    <MessageBody email={ this.props.email } />
                    : 
                    <MessagesRows emails={ this.props.filtered } toggleType={ this.props.toggleType } markRead={ this.props.markRead } renderEmail={ this.props.renderEmail } />
                }
            </div>
        )
    }
}

export default MessagesContainer