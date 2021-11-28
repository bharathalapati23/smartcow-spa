export const logInUser = () => async (dispatch) => {
    dispatch({ type: 'LOG_IN' })
}

export const logOutUser = () => async (dispatch) => {
    dispatch({ type: 'LOG_OUT' })
}
