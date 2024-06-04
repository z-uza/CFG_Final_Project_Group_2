import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RideTable = ({ rides }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ride Name</TableCell>
                        <TableCell>Wait Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rides.map((ride, index) => (
                        <TableRow key={index}>
                            <TableCell>{ride.name}</TableCell>
                            <TableCell>{ride.waitTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RideTable;
