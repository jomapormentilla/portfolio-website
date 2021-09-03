import React from 'react'

class MessagesRows extends React.Component {
    renderEmails = () => {
        return this.props.emails.map(email => {
            let star = !!email.favorite ? 'bi-star-fill' : 'bi-star'
            let read = !!email.read ? 'messages-rows-jomail-read' : '' 

            return (
                <div key={ email.id } onClick={ e => this.props.toggleUnread(email.id) } className={ read } >
                    <div style={{ 'width': '200px', 'overflowX': 'hidden' }}>
                        <div><input type="checkbox" /></div>
                        <div onClick={ e => this.props.toggleFavorite(email.id) } data-id={ email.id }><i className={ star }></i></div>
                        <div>{ email.sender }</div>
                    </div>
                    <div><span>{ email.subject }</span> - <span style={{ 'fontWeight': '200' }}>{ email.body }</span></div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="messages-rows-jomail">
                { this.renderEmails() }
            </div>
        )
    }
}

export default MessagesRows