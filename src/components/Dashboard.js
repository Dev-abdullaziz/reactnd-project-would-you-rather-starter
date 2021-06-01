import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    state = {
        answeredTab: false
    }

    answeredTab() {
        this.setState({
            answeredTab: true
        })
    }

    unansweredTab() {
        this.setState({
            answeredTab: false
        })
    }

    render() {
        const active = 'btn active'
        const inactive ='btn'
        const {authedUser, questions } = this.props

        return (

            <div className='dashboard'>
                <div>
                    <button onClick={() => this.unansweredTab()} className={this.state.answeredTab === false ? active : inactive}>Unanswered Questions</button>
                    <button onClick={() => this.answeredTab()} className={this.state.answeredTab === true ? active : inactive }>Answered Questions</button>
                </div>
                <div className='container'>
                    <ul>
                        { this.props.questionIDs.map(q => {
                            const votes = questions[q].optionOne.votes.concat(questions[q].optionTwo.votes)
                            if(this.state.answeredTab && votes.includes(authedUser) ) {
                                return <li key={q}><Question id={q}/></li>
                            } else if(!this.state.answeredTab && !votes.includes(authedUser)) {
                                return <li key={q}><Question id={q}/></li>
                            }
                            return null
                        }
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUser,
        questions,
        questionIDs: Object.keys(questions).sort(
            (a,b) =>  questions[b].timestamp - questions[a].timestamp
        )
    }
}

export default connect(mapStateToProps)(Dashboard)