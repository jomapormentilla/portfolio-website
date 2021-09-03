import React from 'react'

import MessagesTabs from './MessagesTabs'

class MessagesContainer extends React.Component {
    render(){
        return(
            <div className="messages-container-jomail">
                <MessagesTabs />
            </div>
        )
    }
}

export default MessagesContainer