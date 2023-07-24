import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import PinDropIcon from '@mui/icons-material/PinDrop';

// interface of re retrived data 
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
    phone: string;
    website: string;
    company: {name:string};
  }

  
const ApplicationTable = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [open, setOpen] = React.useState(false);
    const[currAddress,setCurrAddress]=useState({street:'',suite:'',city:'',zipcode:''})

    // data fetching
  useEffect(()=>{
    const fetchUsers=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        setUsers(data)
    }
    fetchUsers()
  },[])

//   handle modal 
const handleModal=(currentAddress:{street:string,suite:string,zipcode:string,city:string})=>{
 setOpen(!open)
 setCurrAddress(currentAddress)
}
    return (
       <>
       <h1 className="text-gray-600 text-2xl text-center p-4">Top Recruiters</h1>
        <TableContainer component={Paper} className="w-9/12 mx-auto ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user?.name}
              </TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.company?.name}</TableCell>
              <TableCell align="right">{user?.website}</TableCell>
              <TableCell align="right"><button onClick={()=>handleModal(user?.address)}><PinDropIcon></PinDropIcon></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog
        open={open}
        onClose={()=>setOpen(!open)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Recruiter location"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <p>Street: {currAddress?.street}</p>
          <p>Suite: {currAddress?.suite}</p>
          <p>City: {currAddress?.city}</p>
          <p>Zipcode: {currAddress?.zipcode}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(!open)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
       </>
    );
};

export default ApplicationTable;