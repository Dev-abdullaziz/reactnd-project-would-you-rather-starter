import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {signOut} from '../actions/authedUser'

class Nav extends Component {
    logout = () => {
        const { dispatch } = this.props
        dispatch(signOut())
    }
    
    render() {
        const { users , authedUser } = this.props
        const user = users[authedUser]
        
        return (

            <div className='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/leaderboard'>Leaderboard</Link></li>
                    <li><Link to='/add'>New</Link></li>
                </ul>
                <div className='greetings'>
                    <span>Hello {user.name}</span>
                    <img 
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='greetingsAvatar'
                    />
                    <button className='signOutBtn' onClick={this.logout}>Sign Out</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)