export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_QUESTIONS = 'SAVE_ANSWER_TO_QUESTIONS'
export const SAVE_QUESTION_TO_QUESTIONS = 'SAVE_QUESTION_TO_QUESTIONS'

export function getQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveAnswerToQuestions(authedUser, id, answer) {
    return {
        type: SAVE_ANSWER_QUESTIONS,
        authedUser,
        id,
        answer
    }
}

export function saveQuestionToQuestions(question) {
    return {
        type: SAVE_QUESTION_TO_QUESTIONS,
        question
    }
}

