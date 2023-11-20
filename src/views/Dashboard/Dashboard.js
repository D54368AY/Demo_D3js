import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import BarChart from "../../components/BarChart";
import StackedBar from "../../components/StackedBar";
import Watchlist from "../../components/Watchlist";
import CurveLineChart from "../../components/CurveLineChart";
const data = [
  {year: 'older', efficiency: 20.3, sales: 6949000},
  {year: 'Jan 01-08', efficiency: 21.6, sales: 8979000},
  {year: 'Jan 09-16', efficiency: 23, sales: 10303000},
  {year: 'Jan 17-24', efficiency: 17.4, sales: 5185000},
  {year: 'Jan 25-31', efficiency: 20.9, sales: 8213000},
  {year: 'futurre', efficiency: 21.4, sales: 5518000},
]
export default function Dashboard() {
  return (
    <Box  pt={1} px={1}>
      <Grid container >
        <Grid item md={6} xs={12} lg={6} xl={6} sm={12} >
          <Paper sx={{ m:1.2, height: "280px", background: "#fff" , p:1 }}>
            <CurveLineChart />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} lg={6} xl={6} sm={12} >
          <Paper sx={{ m:1.2,height: "280px", background: "#fff" , p:1 }}>
          <BarChart data={data} />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} lg={6} xl={6} sm={12} >
          <Paper sx={{m:1.2, height: "280px", background: "#fff" , p:1 }}>
            <StackedBar /> 
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} lg={6} xl={6} sm={12} >
          <Paper sx={{m:1.2, height: "280px", background: "#fff" , p:1 }}>
            <Watchlist />
          </Paper>
        </Grid>
        
      </Grid>
     
    </Box>
  );
}
