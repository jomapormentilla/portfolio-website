import React from 'react'

class MessagesMenu extends React.Component {
    handleOnChange = e => {
        if (e.target.checked) {
            for ( const el in document.querySelectorAll('input')) {
                if (document.querySelectorAll('input')[el].type === "checkbox" && el !== "0") {
                    document.querySelectorAll('input')[el].checked = true
                }
            }
        } else {
            for ( const el in document.querySelectorAll('input')) {
                if (document.querySelectorAll('input')[el].type === "checkbox" && el !== "0") {
                    document.querySelectorAll('input')[el].checked = false
                }
            }
        }
    }

    countEmails = () => {
        return this.props.emails.length
    }

    render(){
        return(
            <div className="messages-menu">
                <div>
                    <div><input type="checkbox" onChange={ this.handleOnChange } /></div>
                    <div><i className="bi-arrow-clockwise"></i></div>
                    <div><i className="bi-three-dots-vertical"></i></div>
                </div>

                <div>
                    <div>1-20 of { this.countEmails() }</div>
                    <div><i className="bi-chevron-left"></i></div>
                    <div><i className="bi-chevron-right"></i></div>
                </div>
            </div>
        )
    }
}

export default MessagesMenu