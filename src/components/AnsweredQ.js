import React , { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredQ extends Component {
    
    render() {
        const { authedUser, users, question } = this.props
        const optionOne = question.optionOne.votes
        const optionTwo = question.optionTwo.votes
        const votes = optionOne.concat(optionTwo)

        return (
            <div className='question'>
                <div className='Qhead'>
                    <h3>{`Asked by ${users[question.author].name}`}</h3>
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
                    <h3>Results:</h3>
                    <div className={optionOne.includes(authedUser) ? 'result chosen': 'result'}>
                        <p>{`Would you rather ${question.optionOne.text}`}</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: `${optionOne.length/votes.length*100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${((optionOne.length/votes.length)*100).toString().substring(0,4)}%`}</div>
                        </div>
                        <div className='chosen-container'>
                            <p>{`${optionOne.length} out of ${votes.length} Votes`}</p>
                            <div className='chosen-label' style={{display: optionOne.includes(authedUser) ? 'flex': 'none'}}>Your Vote</div>
                        </div>
                    </div>
                    <div className={optionTwo.includes(authedUser) ? 'result chosen': 'result'}>
                        <p>{`Would you rather ${question.optionTwo.text}`}</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: `${optionTwo.length/votes.length*100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${((optionTwo.length/votes.length)*100).toString().substring(0,4)}%`}</div>
                        </div>
                        <div className='chosen-container'>
                            <p>{`${optionTwo.length} out of ${votes.length} Votes`}</p>
                            <div className='chosen-label' style={{display: optionTwo.includes(authedUser) ? 'flex': 'none'}} >Your Vote</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions} , {id} ) {
    return {
        authedUser,
        users,
        question:questions[id],
    }
}

export default connect(mapStateToProps)(AnsweredQ)