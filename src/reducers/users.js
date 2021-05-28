import { RECEIVE_USERS, SAVE_ANSWER_USERS, SAVE_QUESTION_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWER_USERS:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.id]: action.answer
                    }
                }
            }
        case SAVE_QUESTION_USERS:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}