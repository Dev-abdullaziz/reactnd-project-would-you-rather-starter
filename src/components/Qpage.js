import React , { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'
import AnsweredQ from './AnsweredQ'
import NotFound from './NotFound'

class Qpage extends Component {
    answerTheQuestion(e , qid) {
        const { dispatch, authedUser } = this.props
        e.preventDefault()
        let answersArr = document.getElementsByName(qid)
        let answer = ''
        for(let i=0;i<2;i++) {
            if(answersArr[i].checked) {
                answer = answersArr[i].value
            }
        }
        if(answer === '') {
            alert('Please choose an answer')
            return
        }
        dispatch(handleSaveAnswer({authedUser, qid , answer}))
        console.log(answer,authedUser, qid, this.props.questions[qid][answer] )
    }
    
    render() {
        const {authedUser, users, questions , id } = this.props
        const question = questions[id]
        const voteOne = question && question.optionOne.votes
        const voteTwo = question && question.optionTwo.votes
        const votes = voteOne && voteOne.concat(voteTwo)

        if(question === undefined) {
            return <NotFound/>
        }

        if(votes.includes(authedUser)) {
            return <AnsweredQ id={id}/>
        }
        
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
                    <form className='form'>
                        <div className='option'>
                            <input value='optionOne' type='radio' id={question.optionOne.text} name={id}/> 
                            <label htmlFor={question.optionOne.text}>{question.optionOne.text}</label>
                        </div>
                        <div className='option'>
                            <input value='optionTwo' type='radio' id={question.optionTwo.text} name={id}/> 
                            <label htmlFor={question.optionTwo.text}>{question.optionTwo.text}</label>
                        </div>
                        
                        <button className='Qbtn' onClick={(event) => this.answerTheQuestion(event , id)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users, questions} , props ) {
    return {
        authedUser,
        users,
        questions,
        id: props.match.params.id
    }
}

export default connect(mapStateToProps)(Qpage)