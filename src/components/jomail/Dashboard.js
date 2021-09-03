import React from 'react'
import './Jomail.css'
import { emails } from '../../data/Emails'

import Header from './Header'
import Menu from './Menu'
import MessagesContainer from './MessagesContainer'

class Dashboard extends React.Component {
    state = {
        emails: emails
    }

    toggleFavorite = id => {
        let newState = this.state
        let idx = newState.emails.findIndex(email => email.id === id)

        newState.emails[idx].favorite = !newState.emails[idx].favorite

        this.setState({ emails: newState.emails })
    }

    toggleUnread = id => {
        let newState = this.state
        let idx = newState.emails.findIndex(email => email.id === id)

        newState.emails[idx].read = true

        this.setState({ emails: newState.emails })
    }

    render(){
        return(
            <div className="dashboard-jomail">
                <Header />
                <div style={{ 'display': 'flex', 'flexDirection': 'row', 'height': '100%', 'maxHeight': '87vh', 'width': '100%', 'overflowY': 'scroll' }}>
                    <Menu emails={ this.state.emails } />
                    <MessagesContainer emails={ this.state.emails } toggleFavorite={ this.toggleFavorite } toggleUnread={ this.toggleUnread } />
                </div>
            </div>
        )
    }
}

export default Dashboard