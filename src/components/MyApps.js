import React from 'react'
import { Route, Link } from 'react-router-dom'

import Dashboard from './jomail/Dashboard'

class MyApps extends React.Component {
    state = {
        apps: [
            {
                name: 'JoMail',
                path: '/jomail',
                desc: 'A Gmail interface clone. Users can use this to communicate with other users on the JoMatrix platform.',
                component: <Dashboard />,
                display: true
            },
            {
                name: 'Dog Age Match',
                path: '/dogmatch',
                desc: 'When will you and your dog be the same age?',
                component: <Dashboard />,
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
                            <span>{ app.name }</span>
                            <Link to={ this.props.routeInfo.match.path + app.path } className="btn btn-light btn-sm">Open</Link>
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

    renderRoutes = () => {
        return this.state.apps.map((app, id) => {
            if(!!app.display) {
                return <Route path={ this.props.routeInfo.match.path + app.path } component={ routeInfo => app.component } key={ id } />
            } else {
                return null
            }
        })
    }

    render(){
        return(
            <div className="my-apps" style={{ 'flexDirection': 'column', 'justifyContent': 'start', 'alignItems': 'start', 'backgroundColor': '#ddd' }}>

                    <Route exact path={ `${this.props.routeInfo.match.path}` }>
                        <h2 style={{ 'textAlign': 'center', 'width': '100%', 'borderBottom': 'solid 1px #aaa', 'paddingBottom': '15px' }}>My Apps</h2>
                        <br />
                        <div className="my-apps-container">
                            { this.renderApps() }
                        </div>
                    </Route>

                    {/* <Route path={ `${this.props.routeInfo.match.path}/jomail` } component={ routeInfo => <Dashboard /> } /> */}

                    { this.renderRoutes() }
            </div>
        )
    }
}

export default MyApps