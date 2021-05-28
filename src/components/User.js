import React ,{ Component } from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render () {
        const { authedUser, users, id } = this.props
        const user = users[id]

        return (
            <div className='user' style={authedUser === user.id ? {border: '1px solid gold'} : null}>
                <img 
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                    />
                <div className='vs'></div>
                <div className='userInfo'>
                    <h3>{user.name}</h3>
                    <div className='userData'>
                        <p>Answered Questions</p>
                        <span>{Object.keys(user.answers).length}</span>
                    </div>
                    <div className='userData'>
                        <p>Created Questions</p>
                        <span>{user.questions.length}</span>
                    </div>
                </div>
                <div className='vs'></div>
                <div className='userScore'>
                    <h4 style={authedUser === user.id ? {backgroundColor: 'gold'} : null}>Score</h4>
                    <div>
                        <p>{Object.keys(user.answers).length + user.questions.length}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({authedUser,users}, {id}){
    return {
        authedUser,
        users,
        id
    }
}

export default connect(mapStateToProps)(User)