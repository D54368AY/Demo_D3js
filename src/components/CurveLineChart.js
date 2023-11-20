import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
const dynamicData = {
  January: [80, 140, 100, 150, 90, 120, 100],
  February: [80, 140, 100, 150, 90, 120, 100],
  March: [80, 140, 100, 150, 90, 120, 100],
  April: [80, 140, 100, 150, 90, 120, 100],
  May: [80, 140, 100, 150, 90, 120, 100],
  June: [80, 140, 100, 150, 90, 120, 100],
};
export default function CurveLineChart() {
  const [data, setData] = useState([80, 140, 100, 150, 90, 120, 100]);
  const [month, setMonth] = useState("January");
  const svgRef = useRef();
  useEffect(() => {
    // setting up svg
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");
    // .style("background", "#c5f6fa")

    // setting the scaleing
    // xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    //yscales
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    //  Setup functions to draw Lines ---------------//
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(1 + data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(7);
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h})`)
      .select(".domain")
      .remove()
      .select(".tick:nth-of-type(1)")
      .attr("display", "none");
    svg.append("g");
    //   .call(yAxis)
    //   .select(".domain")
    //   .remove()
    //   .select(".tick:nth-of-type(1)")
    //   .attr("display", "none");

    // setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47B747")
      .attr("stroke-width", "3px");
  }, [data]);

  const handleChange = (event) => {
    setMonth(event.target.value);
    setData(dynamicData[event.target.value]);
  };
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography sx={{ fontWeight: "bolder" }}>Checking Account </Typography>
        <Box display={"flex"}>
          <FormControl sx={{ mr: 1, width: "120px" }}>
            {/* <InputLabel>Manage</InputLabel> */}
            <Select
              variant="outlined"
              value={"Sales"}
            >
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"no"}>No Data</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mr: 1, width: "120px" }}>
            {/* <InputLabel id="monthId">Month</InputLabel> */}
            <Select
              // labelId="monthId"
              value={month}
              variant="outlined"
              // label="Month"
              onChange={handleChange}
            >
              <MenuItem value={"January"}>January</MenuItem>
              <MenuItem value={"February"}>February</MenuItem>
              <MenuItem value={"March"}>March</MenuItem>
              <MenuItem value={"April"}>April</MenuItem>
              <MenuItem value={"May"}>May</MenuItem>
              <MenuItem value={"June"}>June</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ pb: 1 }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg ref={svgRef} style={{ display: "block" }}></svg>
      </div>
    </Box>
  );
}
