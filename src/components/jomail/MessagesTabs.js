import React from 'react'

class MessagesTabs extends React.Component {
    state = {
        tabs: [
            {   name: 'Primary', icon: 'bi-inbox' },
            {   name: 'Social', icon: 'bi-people' },
            {   name: 'Promotions', icon: 'bi-tag' },
            {   name: 'Updates', icon: 'bi-info-circle' },
        ]
    }

    renderTabs = () => {
        return this.state.tabs.map((tab, id) => {
            return <div key={ id }><i className={ tab.icon }></i> &nbsp; { tab.name }</div>
        })
    }

    render(){
        return(
            <div className="messages-tabs-jomail">
                { this.renderTabs() }
            </div>
        )
    }
}

export default MessagesTabs