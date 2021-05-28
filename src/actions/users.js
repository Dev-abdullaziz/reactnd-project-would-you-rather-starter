export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER_USERS = 'SAVE_ANSWER_TO_USERS'
export const SAVE_QUESTION_USERS = 'SAVE_QUESTION_TO_USERS'


export function getUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveAnswerToUsers(authedUser, id, answer) {
    return {
        type: SAVE_ANSWER_USERS,
        authedUser,
        id,
        answer
    }
}

export function saveQuestionToUsers(question,authedUser) {
    return {
        type: SAVE_QUESTION_USERS,
        question,
        authedUser
    }
}


