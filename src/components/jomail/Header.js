import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <div className="header-jomail">
                <span>[[ JoMail Logo ]]</span>
                <div>
                    <i className="bi-person-circle" style={{ 'fontSize': '30px', 'margin': '0' }}></i>
                </div>
            </div>
        )
    }
}

export default Header