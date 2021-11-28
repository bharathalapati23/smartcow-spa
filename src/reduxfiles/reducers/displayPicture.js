export default (displayPic =0, action) => {
    switch(action.type) {
        case 'SET_DISPLAY_PIC': 
            console.log(action.payload, 'action')
            return action.payload
        default:
            return displayPic
    }

}