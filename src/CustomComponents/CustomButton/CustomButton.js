import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles((theme) => ({
    root: {
        color: '#FFFFFF',
        backgroundColor: '#46B13D',
        width: 78,
        height: 33,
        alignSelf: 'center',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontWeight: 600,
        '&:hover': {
            pointer: 'cursor',
            color: '#FFFFFF',
            backgroundColor: '#46B13D',
        },
    },
}))(Button);

export default CustomButton
