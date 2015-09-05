import React from 'react'
import UserService from '../../app/UserService'
import LoginButton from '../elements/LoginButton.jsx'
import UserDisplay from '../components/UserDisplay.jsx'
import { reactiveComponent } from 'mobservable-react'
import { resolve } from 'react-resolver'
import app from '../../data/app'

@resolve('user', () => {
    return UserService.fetchUserData()
})
@reactiveComponent
class User extends React.Component {

    constructor() {
        super()
    }

    requestLogin(e) {
        e.preventDefault()
        UserService.authenticate()
    }

    render() {
        let displayElement = {}
        let { user } = app

        if(UserService.isnt('anon')) {
            displayElement = <UserDisplay key="userDisplay" user={user} />
        }
        else {
            displayElement = <LoginButton key="loginBtn" doLogin={this.requestLogin.bind(this)} />
        }

        return (
            <div className="user-area">
                {displayElement}
            </div>
        )
    }
}

export default User