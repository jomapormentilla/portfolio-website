import React from 'react'

class Menu extends React.Component {
    state = {
        items: [
            { name: 'Inbox', icon: 'bi-inbox-fill', active: true },
            { name: 'Starred', icon: 'bi-star-fill', active: false },
            { name: 'Important', icon: 'bi-cone-striped', active: false },
            { name: 'Sent', icon: 'bi-cursor-fill', active: false },
            { name: 'Drafts', icon: 'bi-file-earmark-fill', active: false },
            { name: 'Spam', icon: 'bi-exclamation-octagon-fill', active: false },
            { name: 'Trash', icon: 'bi-trash-fill', active: false },
        ]
    }

    renderItems = () => {
        let unread = this.countUnread()
        let starred = this.countStarred()

        return this.state.items.map((item, id) => {
            let active = ''
            if ( !!item.active ) {
                active = ' menu-jomail-active'
            }

            return (
                <div key={ id } data-id={ item.name } className={ active } onClick={ this.setActive } title={ item.name } style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                    <div><i className={ item.icon }></i> &nbsp; { item.name }</div>
                    { unread > 0 && item.name === "Inbox" ? <strong>{ unread }</strong> : null }
                    { starred > 0 && item.name === "Starred" ? <strong>{ starred }</strong> : null }
                </div>
            )
        })
    }

    setActive = e => {
        this.setState(prevState => {
            for (const el in prevState.items) {
                if (prevState.items[el].name === e.target.dataset.id) {
                    prevState.items[el].active = true
                } else {
                    prevState.items[el].active = false
                }
            }

            return prevState
        })
    }

    countStarred = () => {
        let emails = this.props.emails.filter(email => !email.read && !!email.favorite)
        return emails.length
    }

    countUnread = () => {
        let emails = this.props.emails.filter(email => !email.read)
        return emails.length
    }

    render(){
        return(
            <div className="menu-jomail">
                <button className="btn btn-light" style={{ 'margin': '10px', 'padding': '10px', 'marginBottom': '20px', 'fontSize': '15px' }} onClick={ this.props.showNewMessage }>Compose</button>
                { this.renderItems() }
                <hr />
            </div>
        )
    }
}

export default Menu