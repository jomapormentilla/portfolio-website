import React from 'react'
import { Route, Link } from 'react-router-dom'

import Dashboard from './jomail/Dashboard'

class MyApps extends React.Component {
    state = {
        apps: [
            {
                name: 'JoMail',
                path: '/jomail',
                desc: 'JoMail description!',
                component: 'Dashboard',
                display: true
            },
            {
                name: 'Dog Age Match',
                path: '/dogmatch',
                desc: 'When will you and your dog be the same age?',
                component: 'Dashboard',
                display: false
            },
        ]
    }

    renderApps = () => {
        return this.state.apps.map((app, id) => {
            if (!!app.display) {
                return(
                    <div className="my-app-card" key={ id }>
                        <div className="my-app-header">
                            <Link to={ this.props.routeInfo.match.path + app.path } className="my-app-link">{ app.name }</Link>
                        </div>
                        <div className="my-app-body">
                            { app.desc }
                        </div>
                    </div>
                )
            } else {
                return null
            }
        })
    }

    render(){
        return(
            <div className="my-apps" style={{ 'flexDirection': 'column', 'justifyContent': 'start', 'alignItems': 'start', 'backgroundColor': '#ddd' }}>

                    <Route exact path={ `${this.props.routeInfo.match.path}` }>
                        <h2>MyApps</h2>
                        <hr />
                        <div className="my-apps-container">
                            { this.renderApps() }
                        </div>
                    </Route>

                    <Route path={ `${this.props.routeInfo.match.path}/jomail` } component={ routeInfo => <Dashboard /> } />
            </div>
        )
    }
}

export default MyApps