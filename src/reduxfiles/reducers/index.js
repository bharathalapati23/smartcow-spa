import { combineReducers } from 'redux'
import login from './login'
import displayPic from './displayPicture'

export default combineReducers({
    login,
    displayPic
})