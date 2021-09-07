import React from 'react'

import MessagesTabs from './MessagesTabs'
import MessagesRows from './MessagesRows'
import MessageBody from './MessageBody'

class MessagesContainer extends React.Component {
    render(){
        return(
            <div className="messages-container-jomail">
                <MessagesTabs emails={ this.props.emails } />
                { !!this.props.showEmail ? 
                    <MessageBody email={ this.props.email } />
                    : 
                    <MessagesRows emails={ this.props.emails } toggleFavorite={ this.props.toggleFavorite } toggleUnread={ this.props.toggleUnread } renderEmail={ this.props.renderEmail } />
                }
            </div>
        )
    }
}

export default MessagesContainer