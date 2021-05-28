import React , { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Question extends Component {
    
    render() {
        const { users, question, id } = this.props

        return (
            <div className='question'>
                <div className='Qhead'>
                    <h3>{`${users[question.author].name} asks:`}</h3>
                </div>
                <div>
                    <img
                        src={users[question.author].avatarURL}
                        alt={`Avatar of ${users[question.author].name}`}
                        className='avatar'
                    />
                </div>
                <div className='vs'></div>
                <div className='Qinfo'>
                    <h3>Would you rather ...</h3>
                    <p className='Qanswer'>{`a. ${question.optionOne.text.substring(0,15)}...`}</p>
                    <Link to={`question/${id}`} className='Qlink'>View Poll</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions} , {id} ) {
    return {
        users,
        question:questions[id],
    }
}

export default connect(mapStateToProps)(Question)