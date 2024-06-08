import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddToFavouritesBtn from '../Favourites/FavouritesButton';
import './RideTable.css'

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const RideTable = ({ rides, addToFavourites, themePark }) => {
    return (
        <> 
        <h1 className="ridesList"> Here are the rides for {themePark}!</h1> 
        <TableContainer component={Paper} className="ride-table-container">
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow className="ride-rows">
                        <TableCell>Ride Name</TableCell>
                        <TableCell>Wait Time</TableCell>
                        <TableCell> Status </TableCell>
                        <TableCell>Favourite</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rides.map((ride, index) => (
                        <TableRow key={index}>
                            <TableCell>{ride.name}</TableCell>
                            <TableCell>{ride.waitTime} minutes</TableCell>
                            <TableCell>
                                {ride.isOpen ? (
                                    <>
                                Open <AiFillCheckCircle color="green" />
                                    </>
                                ) : (
                                    <>
                                Closed <AiFillCloseCircle color="red" />
                                    </>
                                )}
                            </TableCell>
                            <TableCell>
                                <AddToFavouritesBtn rideName={ride.name} addToFavourites={addToFavourites} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
                                }

export default RideTable;

