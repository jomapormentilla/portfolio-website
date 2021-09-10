import React from 'react'

class MessagesRows extends React.Component {
    handleOnClick = (e, id) => {
        if (e.target.nodeName !== "I") {
            this.props.renderEmail(id)
            this.props.markRead(id)
        }
    }

    parseBody = (email) => {
        let el = document.createElement('div')
        el.innerHTML = email.body

        let result = el.innerText.substr(0, 50)

        return email.body.length > 50 ? result + ' ...' : result
    }

    renderEmails = () => {
        return this.props.emails.map(email => {
            let star = !!email.starred ? 'bi-star-fill starred' : 'bi-star'
            let read = !!email.read ? 'messages-rows-jomail-read' : '' 
            let important = !!email.important ? 'bi-bookmark-fill' : 'bi-bookmark'

            return (
                <div key={ email.id } onClick={ e => this.handleOnClick(e, email.id) } className={ read }>
                    <div style={{ 'width': 'fitContent' }}>
                        <div><input type="checkbox" /></div>
                        <div onClick={ e => this.props.toggleType(email.id, 'starred') } data-id={ email.id }><i className={ star }></i></div>
                        <div onClick={ e => this.props.toggleType(email.id, 'important') } data-id={ email.id }><i className={ important }></i></div>
                        <div>{ email.sender }</div>
                    </div>
                    <div>
                        <span style={{ 'fontWeight': '800' }}>{ email.subject }</span> &nbsp; - &nbsp; 
                        <span style={{ 'fontWeight': '200' }}>{ this.parseBody(email) }</span>
                    </div>
                </div>
            )
        })
    }

    renderEmailRows = () => {
        return this.props.emails.map(email => {
            let star = !!email.starred ? 'bi-star-fill starred' : 'bi-star'
            let read = !!email.read ? 'messages-rows-jomail-read' : '' 
            let important = !!email.important ? 'bi-bookmark-fill' : 'bi-bookmark'

            return (
                <tr key={ email.id } onClick={ e => this.handleOnClick(e, email.id) } className={`${ read } messages-row`}>
                    <td><input type="checkbox" /></td>
                    <td onClick={ e => this.props.toggleType(email.id, 'starred') } data-id={ email.id }><i className={ star }></i></td>
                    <td onClick={ e => this.props.toggleType(email.id, 'important') } data-id={ email.id }><i className={ important }></i></td>
                    <td>{ email.sender }</td>
                    <td>
                        <span style={{ 'fontWeight': '800' }}>{ email.subject }</span> &nbsp; - &nbsp; 
                        <span style={{ 'fontWeight': '200' }}>{ this.parseBody(email) }</span>
                    </td>
                </tr>
            )
        })
    }

    // render(){
    //     return(
    //         <div className="messages-rows-jomail">
    //             { this.props.emails.length > 0 ? this.renderEmails() : <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>No emails found.</div> }
    //         </div>
    //     )
    // }

    render(){
        return(
            <div className="messages-rows-jomail">
                <table className="message-rows-jomail-table">
                    <tbody>
                        { this.props.emails.length > 0 ? this.renderEmailRows() : <tr><td style={{ 'textAlign': 'center' }}>No emails found.</td></tr> }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MessagesRows