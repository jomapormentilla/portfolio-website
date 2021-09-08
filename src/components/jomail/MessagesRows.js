import React from 'react'

class MessagesRows extends React.Component {
    handleOnClick = (e, id) => {
        if (e.target.nodeName !== "I") {
            this.props.renderEmail(id)
            this.props.markRead(id)
        }
    }

    renderEmails = () => {
        return this.props.emails.map(email => {
            let star = !!email.starred ? 'bi-star-fill starred' : 'bi-star'
            let read = !!email.read ? 'messages-rows-jomail-read' : '' 
            let important = !!email.important ? 'bi-bookmark-fill' : 'bi-bookmark'

            return (
                <div key={ email.id } onClick={ e => this.handleOnClick(e, email.id) } className={ read } >
                    <div style={{ 'width': '300px' }}>
                        <div><input type="checkbox" /></div>
                        <div onClick={ e => this.props.toggleType(email.id, 'starred') } data-id={ email.id }><i className={ star }></i></div>
                        <div onClick={ e => this.props.toggleType(email.id, 'important') } data-id={ email.id }><i className={ important }></i></div>
                        <div>{ email.sender }</div>
                    </div>
                    <div><span>{ email.subject }</span> &nbsp; - &nbsp; <span style={{ 'fontWeight': '200' }}>{ email.body }</span></div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="messages-rows-jomail">
                { this.props.emails.length > 0 ? this.renderEmails() : <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>No emails found.</div> }
            </div>
        )
    }
}

export default MessagesRows