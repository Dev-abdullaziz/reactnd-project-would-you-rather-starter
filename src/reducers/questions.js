import { RECEIVE_QUESTIONS, SAVE_ANSWER_QUESTIONS, SAVE_QUESTION_TO_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER_QUESTIONS:
            const newVote = [action.authedUser]

            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    [action.answer]:{
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat(newVote)
                    }
                }
            }
        case SAVE_QUESTION_TO_QUESTIONS:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}