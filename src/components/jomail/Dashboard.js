import React from 'react'
import './Jomail.css'
import { emails } from '../../data/Emails'

import Header from './Header'
import Menu from './Menu'
import MessagesContainer from './MessagesContainer'
import NewMessage from './NewMessage'

class Dashboard extends React.Component {
    state = {
        emails: emails,
        filtered: emails,
        showCompose: false,
        email: null,
        showEmail: false
    }

    filterEmails = type => {
        type = type.toLowerCase()
        let filtered = type !== 'inbox' ? this.state.emails.filter(email => email.categories.includes(type)) : emails
        this.setState(prevState => ({ ...prevState, filtered }))
    }

    toggleType = (id, type) => {
        let newState = this.state
        let idx = newState.emails.findIndex(email => email.id === id)

        newState.emails[idx][type] = !newState.emails[idx][type]

        if (newState.emails[idx][type]) {
            newState.emails[idx].categories.push(type)
        } else {
            newState.emails[idx].categories.filter(category => category !== type)
        }

        this.setState(prevState => ({ ...prevState, emails: newState.emails }))
    }

    markRead = id => {
        let newState = this.state
        let idx = newState.emails.findIndex(email => email.id === id)

        newState.emails[idx].read = true

        this.setState({ emails: newState.emails })
    }

    showNewMessage = () => {
        this.setState(prevState => ({
            ...prevState,
            showCompose: true
        }))
    }
    
    hideNewMessage = () => {
        this.setState(prevState => ({
            ...prevState,
            showCompose: false
        }))
    }

    renderEmail = id => {
        let email = this.state.emails.find(email => email.id === id)
        this.setState({
            showEmail: true,
            email
        })
    }

    hideEmail = () => {
        this.setState({
            showEmail: false
        })
    }

    render(){
        return(
            <div className="dashboard-jomail">
                <Header />
                <div style={{ 'display': 'flex', 'flexDirection': 'row', 'height': '100%', 'maxHeight': '87vh', 'width': '100%', 'overflowY': 'scroll' }}>
                    <Menu emails={ this.state.emails } showNewMessage={ this.showNewMessage } hideEmail={ this.hideEmail } filterEmails={ this.filterEmails } />
                    <MessagesContainer emails={ this.state.emails } filtered={ this.state.filtered } toggleType={ this.toggleType } markRead={ this.markRead } renderEmail={ this.renderEmail } showEmail={ this.state.showEmail } email={ this.state.email } />
                    
                    { !!this.state.showCompose ? <NewMessage hideNewMessage={ this.hideNewMessage } /> : null }
                </div>
            </div>
        )
    }
}

export default Dashboard