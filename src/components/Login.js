import React from 'react'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()

        console.log(this.state)

        // this.setState({ email: '', password: '' })
        this.props.hideLogin()
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={ this.handleOnSubmit }>
                    <input type="text" name="email" placeholder="Email" value={ this.state.email } onChange={ this.handleOnChange } />
                    <input type="text" name="password" placeholder="Password" value={ this.state.password } onChange={ this.handleOnChange } />
                    <button type="submit" className="btn btn-outline-success">Login</button>
                </form>
            </div>
        )
    }
}

export default Login