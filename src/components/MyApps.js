import React from 'react'
import { Route, Link } from 'react-router-dom'

import Dashboard from './jomail/Dashboard'

class MyApps extends React.Component {
    render(){
        return(
            <div className="my-apps" style={{ 'flexDirection': 'column', 'justifyContent': 'start', 'alignItems': 'start', 'backgroundColor': '#ddd' }}>

                    <Route exact path={ `${this.props.routeInfo.match.path}` }>
                        <h2>MyApps</h2>
                        <Link to={ this.props.routeInfo.match.path + `/jomail` }>JoMail</Link>
                    </Route>

                    <Route path={ `${this.props.routeInfo.match.path}/jomail` } component={ routeInfo => {
                        return <Dashboard />
                    } } />

            </div>
        )
    }
}

export default MyApps