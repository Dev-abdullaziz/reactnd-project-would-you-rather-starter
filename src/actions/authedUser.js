export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export function signIn(userID) {
    return {
        type: SIGN_IN,
        id: userID === undefined ? null : userID
    }
}

export function signOut() {
    return {
        type: SIGN_OUT,
    }
}

