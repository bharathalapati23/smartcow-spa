import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CustomInput = withStyles({
    root: {
        '& .MuiOutlinedInput-input': {
            padding: '15px 8px',
            height: 40,
            boxSizing: 'border-box',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#999999',
            },
            '&:hover fieldset': {
                borderColor: '#5C90F3',
            },
            marginBottom: 20,
            marginTop: 8
        },
        "& .MuiFormLabel-root": {
            color: "#CCCCCC" ,
            fontFamily: 'Poppins',
            fontSize: '15px'
        }
    },
})(TextField);

export default CustomInput
