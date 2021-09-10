import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

class NavContainer extends React.Component {
    state = {
        routes: [
            {
                path: '/',
                name: 'Home'
            },
            {
                path: '/apps',
                name: 'My Apps'
            },
            {
                path: '/resume',
                name: 'Resume'
            },
            {
                path: '/contact',
                name: 'Contact'
            },
        ],
        showLogin: false
    }

    renderLogin = () => {
        this.setState({ showLogin: !this.state.showLogin })
    }

    hideLogin = () => {
        this.setState({ showLogin: false })
    }

    renderLinks = () => {
        return this.state.routes.map((link, id) => {
            let active = ''
            if (link.path === this.props.routeInfo.location.pathname) {
                active = 'nav-link-active'
            }

            return <Link to={ link.path } className={ active } key={ id } onClick={ this.hideLogin }>{ link.name }</Link>
        })
    }

    render(){
        return(
            <div className="nav-container">
                <div className="nav-container-logo">
                    <Link to="/">JOMATRIX</Link>
                </div>

                <div className="nav-container-links">
                    { this.renderLinks() }

                    <span onClick={ this.renderLogin }>Login</span>
                </div>
                { !!this.state.showLogin ? <Login hideLogin={ this.hideLogin } /> : null }
            </div>
        )
    }
}

export default NavContainer