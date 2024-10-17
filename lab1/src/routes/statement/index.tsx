import { Button, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { ReactNode } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function createData(
    date: Date,
    description: string,
    dr_cr: string,
    amount: number,
    balance: number,
) {
    return { date, description, dr_cr, amount, balance };
}

const rows = [
    createData(new Date("09/11/2001"), 'Minimum Monthly Fee', 'Dr', 12000, 100000),
    createData(new Date("09/11/2002"), 'Minimum Monthly Fee', 'Cr', 12000, 100000),
    createData(new Date("09/11/2003"), 'Minimum Monthly Fee', 'Dr', 12000, 100000),
    createData(new Date("09/11/2004"), 'Minimum Monthly Fee', 'Cr', 12000, 100000),
    createData(new Date("09/11/2005"), 'Minimum Monthly Fee', 'Dr', 12000, 100000),
];

export default function Statement() {
    const [accountType, setAccountType] = React.useState('Select Account');

    function handleChange(event: SelectChangeEvent<string>, child: ReactNode): void {
        setAccountType(event.target.value);
    }

    return (
        <div className="container-fluid mt-2 bg-white" style={{ borderRadius: '15px 15px 0px 0px', flex: 1 }}>
            <div className="container p-4" style={{ color: '#003366' }}>
                <h3>Account Statements</h3>
                <div className="row g-3 m-1 p-2 pb-4" style={{ border: "2px solid #d2d2d2", borderRadius: 15, boxShadow: "0 4px 8px #d2d2d2" }}>
                    <div className="col-3 ">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={accountType}
                                label="Account Type"
                                onChange={handleChange}
                            >
                                <MenuItem value={"Select Account"} selected disabled>Select Account</MenuItem>
                                <MenuItem value={"Savings Account"}>Savings Account</MenuItem>
                                <MenuItem value={"Current Account"}>Current Account</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-2">
                        <DatePicker format="DD/MM/YYYY" label="Select start date" defaultValue={dayjs()} />
                    </div>
                    <div className="col-2">
                        <DatePicker format="DD/MM/YYYY" label="Select end date" defaultValue={dayjs()} />
                    </div>
                    <div className="col-5 d-flex justify-content-around ">
                        <Button variant="contained">Generate</Button>
                        <Button variant="contained">Email</Button>
                        <Button variant="outlined">Export</Button>
                    </div>
                </div>
            </div>
            <div className="container p-4" style={{ color: '#003366' }}>
                <div className="row g-3 m-1 p-1" style={{ border: "2px solid #d2d2d2", borderRadius: 15, boxShadow: "0 4px 8px #d2d2d2" }}>
                    <div className="col-12 p-2">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                        <TableCell align="right">Dr/ Cr</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Balance</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.date.toString()}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.date.toLocaleDateString()}
                                            </TableCell>
                                            <TableCell align="right">{row.description}</TableCell>
                                            <TableCell align="right">{row.dr_cr}</TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                            <TableCell align="right">{row.balance}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}