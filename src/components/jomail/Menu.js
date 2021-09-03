import React from 'react'

class Menu extends React.Component {
    state = {
        items: [
            { name: 'Inbox', icon: 'bi-inbox', active: true },
            { name: 'Starred', icon: 'bi-star-fill', active: false },
            { name: 'Important', icon: 'bi-cone-striped', active: false },
            { name: 'Sent', icon: 'bi-cursor-fill', active: false },
            { name: 'Drafts', icon: 'bi-file-earmark', active: false },
            { name: 'Spam', icon: 'bi-exclamation-octagon', active: false },
            { name: 'Trash', icon: 'bi-trash-fill', active: false },
        ]
    }

    renderItems = () => {
        return this.state.items.map((item, id) => {
            let active = ''
            if ( !!item.active ) {
                active = ' menu-jomail-active'
            }
            return <div key={ id } className={ active }><i className={ item.icon }></i> &nbsp; { item.name }</div>
        })
    }

    render(){
        return(
            <div className="menu-jomail">
                <button className="btn btn-light" style={{ 'margin': '10px', 'padding': '10px', 'marginBottom': '20px' }}>Compose</button>
                { this.renderItems() }
            </div>
        )
    }
}

export default Menu