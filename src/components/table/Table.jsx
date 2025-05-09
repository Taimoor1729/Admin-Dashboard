import React from "react";
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListTable() {
    const data = [
        {
            id: 9389,
            product: "acer Nitro",
            img: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw',
            customer : "jhon smith",
            date: "1 march",
            amount: 785,
            method: "cash on delivery",
            status: "approved"
        },
        {
            id: 9389,
            product: "playstation 5",
            img: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw',
            customer : "Michael Doe",
            date: "1 march",
            amount: 900,
            method: "cash on delivery",
            status: "pending"
        },
        {
            id: 9389,
            product: "redragon 5101",
            img: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw',
            customer : "jhon smith",
            date: "1 march",
            amount: 90,
            method: "cash on delivery",
            status: "pending"
        },
        {
            id: 9389,
            product: "Razer Blade 15",
            img: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw',
            customer : "jane smith",
            date: "1 march",
            amount: 920,
            method: "Online",
            status: "approved"
        },
        {
            id: 9389,
            product: "Asus Roc Strix",
            img: 'https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw',
            customer : "tset smith",
            date: "1 march",
            amount: 2000,
            method: "Online",
            status: "pending"
        }
    ]
    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell className="tabelCell">Tracking ID</TableCell>
                <TableCell className="tabelCell">Product</TableCell>
                <TableCell className="tabelCell">customer</TableCell>
                {/* <TableCell className="tabelCell">Date</TableCell> */}
                <TableCell className="tabelCell">Amount</TableCell>
                <TableCell className="tabelCell">Payment Method</TableCell>
                <TableCell className="tabelCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className="tabelCell" >
                  {row.id}
                </TableCell>
                <TableCell className="tabelCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="tabelCell" >{row.customer}</TableCell>
                <TableCell className="tabelCell" >{row.date}</TableCell>
                <TableCell className="tabelCell" >{row.method}</TableCell>
                <TableCell className="tabelCell" >
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default ListTable;