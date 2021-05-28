const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
        const resultState = next(action)
        console.log('The state: ', store.getState())
    console.groupEnd()
    return resultState
}

export default logger