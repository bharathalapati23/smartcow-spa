import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PDFIcon from '../../../../Logo/pdficon.svg'

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles({
    
    tableHeader: {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px'
    },
    tableBody: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '24px'
    }
});

function createData(refId, date, amount, invoice) {
    return { refId, date, amount, invoice };
}

const rows = [
    createData('4571222f6rthswfg9981fr55', '7/12/20', '$28', 24),
    createData('4571222f6rthswfg9981fr55', '7/12/20', '$36', 37),
    createData('4571222f6rthswfg9981fr55', '7/12/20', '$14', 24),
];

const BillingTab = () => {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader}>REFERENCE ID</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>DATE</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>AMOUNT</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>INVOICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="left" className={classes.tableBody}>{row.refId}</TableCell>
                            <TableCell align="left" className={classes.tableBody}>{row.date}</TableCell>
                            <TableCell align="left" className={classes.tableBody}>{row.amount}</TableCell>
                            <TableCell align="left" className={classes.tableBody}>
                                <img src={PDFIcon}></img>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BillingTab
