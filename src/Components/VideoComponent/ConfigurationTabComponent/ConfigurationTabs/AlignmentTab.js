import React from 'react'
import Button from '@material-ui/core/Button';

const AlignmentTab = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <Button variant="outlined" style={{ width: '30%'}}>Left</Button>
            <Button variant="outlined" style={{ width: '30%'}}>Center</Button>
            <Button variant="outlined" style={{ width: '30%'}}>Right</Button>
        </div>
    )
}

export default AlignmentTab
