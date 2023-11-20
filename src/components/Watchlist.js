import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function Watchlist() {

    function createData(name, thismonth, ytd) {
        return { name, thismonth, ytd };
      }
      
      const rows = [
        createData('Sales', '1,194.58', '11,418.29'),
        createData('Advertising', '6,879.02', '17,022.45'),
        createData('Inventory', '1,194.58', '7,032.45'),
        createData('Entertainment', '2,479.02', '9,022.45'),
        createData('Product', '1,194.58', '5,022.45'),
      ];
      
  return (
    <Box sx={{px:1}}>
     <Box sx={{  color:'black',fontWeight:'bolder'}}>Account Watchlist</Box>
     <Divider sx={{my:1,mx:-1}} />
     <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'gray'}}>Account</TableCell>
            <TableCell sx={{color:'gray'}} align="right">This Month</TableCell>
            <TableCell sx={{color:'gray'}} align="right">YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell sx={{color:'black',fontWeight:'bolder'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color:'black',fontWeight:'bolder'}} align="right">{row.thismonth}</TableCell>
              <TableCell sx={{color:'black',fontWeight:'bolder'}} align="right">{row.ytd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </Box>    
  )
}
