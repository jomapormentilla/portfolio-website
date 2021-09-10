import React from 'react'

class MessagesTabs extends React.Component {
    state = {
        tabs: [
            {   name: 'Primary', icon: 'bi-inbox', active: true },
            {   name: 'Social', icon: 'bi-people', active: false },
            {   name: 'Promotions', icon: 'bi-tag', active: false },
            {   name: 'Updates', icon: 'bi-info-circle', active: false },
        ]
    }

    renderTabs = () => {
        return this.state.tabs.map((tab, id) => {
            let active = 'messages-tabs-inactive'
            if (!!tab.active) {
                active = 'messages-tabs-active'
            }
            return <div key={ id } className={ active } data-id={ tab.name } onClick={ this.setActive }><i className={ tab.icon }></i> &nbsp; { tab.name }</div>
        })
    }

    setActive = e => {
        this.setState(prevState => {
            for (const el in prevState.tabs) {
                if (prevState.tabs[el].name === e.target.dataset.id) {
                    prevState.tabs[el].active = true
                } else {
                    prevState.tabs[el].active = false
                }
            }
            return prevState
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