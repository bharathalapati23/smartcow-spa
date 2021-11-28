export const setDisplayPic = (displayPic) => async (dispatch) => {
    console.log('hgdfghdgf', displayPic)
    dispatch({ type: 'SET_DISPLAY_PIC', payload: displayPic })
}

