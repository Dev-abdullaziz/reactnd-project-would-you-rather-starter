import { getQuestions , saveAnswerToQuestions, saveQuestionToQuestions } from './questions'
import { getUsers, saveAnswerToUsers, saveQuestionToUsers } from './users'
import { _getQuestions, _getUsers, _saveQuestion,_saveQuestionAnswer } from '../utils/_DATA'
import { showLoading , hideLoading } from 'react-redux-loading'

function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users,questions]) => ({
        users,
        questions
    }))
}

export function handleInitialData() {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData().then(({users,questions}) => {
            dispatch(getQuestions(questions))
            dispatch(getUsers(users))
            // dispatch(hideLoading())
        })
    }
}

export function handleSaveAnswer({authedUser, qid , answer}) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestionAnswer({authedUser, qid , answer}).then(() => {
            dispatch(saveAnswerToQuestions(authedUser, qid , answer))
            dispatch(saveAnswerToUsers(authedUser, qid , answer))
            dispatch(hideLoading())
        })
        .catch(e => console.log('Error saving your asnwer: ',e))
    }
}

export function handleSaveQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion(info).then( question => {
            dispatch(saveQuestionToQuestions(question))
            dispatch(saveQuestionToUsers(question, info.author))
            dispatch(hideLoading())
        }).catch(e => console.log('The question wan\'t saved ', e))

    }
}
