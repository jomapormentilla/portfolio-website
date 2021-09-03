import React from 'react'
import { Link } from 'react-router-dom'

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
            {
                path: '/login',
                name: 'Login'
            },
        ]
    }

    renderLinks = () => {
        return this.state.routes.map((link, id) => {
            let active = ''
            if (link.path === this.props.routeInfo.location.pathname) {
                active = 'nav-link-active'
            }

            return <Link to={ link.path } className={ active } key={ id }>{ link.name }</Link>
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
                </div>
            </div>
        )
    }
}

export default NavContainer