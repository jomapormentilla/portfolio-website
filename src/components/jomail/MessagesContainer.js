import React from 'react'

import MessagesTabs from './MessagesTabs'
import MessagesRows from './MessagesRows'

class MessagesContainer extends React.Component {
    render(){
        return(
            <div className="messages-container-jomail">
                <MessagesTabs emails={ this.props.emails } />
                <MessagesRows emails={ this.props.emails } toggleFavorite={ this.props.toggleFavorite } toggleUnread={ this.props.toggleUnread } />
            </div>
        )
    }
}

export default MessagesContainer