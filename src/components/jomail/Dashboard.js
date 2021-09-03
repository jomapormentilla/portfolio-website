import React from 'react'
import './Jomail.css'

import Header from './Header'
import Menu from './Menu'
import MessagesContainer from './MessagesContainer'

class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboard-jomail">
                <Header />
                <div style={{ 'display': 'flex', 'flexDirection': 'row', 'height': '100%', 'width': '100%' }}>
                    <Menu />
                    <MessagesContainer />
                </div>
            </div>
        )
    }
}

export default Dashboard