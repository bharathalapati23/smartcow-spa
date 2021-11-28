import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgArray from '../../../ImageArray'
import { useSelector } from 'react-redux'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#F4F4F4',
        boxSizing: 'border-box',
        padding: '10px',
        borderRadius: '6px',
        width: '286px'
    },
    media: {
        height: 156,
        borderRadius: '6px'
    },
    tags: {
        fontSize: '12px',
        textTransform: 'none',
        padding: '1px',
        marginRight: '4px'
    }
});

export default function MediaCard() {
    const classes = useStyles();
    const reduxSelectedImage = useSelector((state) => state.displayPic)

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgArray[reduxSelectedImage].img}
                    title="Contemplative Reptile"
                />
                <Typography style={{ textAlign: 'center', paddingTop: '3px', fontFamily: 'poppins' }}>Saying Hi to users!</Typography>
                <CardContent>
                    <Button variant="outlined" className={classes.tags}>Email</Button>
                    <Button variant="outlined" className={classes.tags}>Marketing</Button>
                    <Button variant="outlined" className={classes.tags}>Greeting</Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}