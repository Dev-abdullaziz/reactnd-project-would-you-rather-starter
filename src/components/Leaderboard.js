import React , {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Leaderboard extends Component {
    render() {

        const {userIDs} = this.props

        return (
            <div>
                <ul>
                    {userIDs.map(user => 
                        <li key={user}><User id={user}/></li>    
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        userIDs: Object.keys(users).sort((a,b) => Object.keys(users[b].answers).concat(users[b].questions).length - Object.keys(users[a].answers).concat(users[a].questions).length
    )
    }
}

export default connect(mapStateToProps)(Leaderboard)