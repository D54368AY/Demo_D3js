import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box, Divider, Typography } from "@mui/material";
const data = [
  {
    group: "August",
    Nitrogen: "12",
    normal: "11",
  },
  {
    group: "September",
    Nitrogen: "16",
    normal: "16",
  },
  {
    group: "October",
    Nitrogen: "13",
    normal: "19",
  },
  {
    group: "November",
    Nitrogen: "10",
    normal: "14",
  },
  {
    group: "December",
    Nitrogen: "21",
    normal: "12",
  },
  {
    group: "January",
    Nitrogen: "20",
    normal: "10",
  },
];
const subgroups = ["group", "Nitrogen", "normal"].slice(1);
export default function StackedBar() {
  const svgRef = useRef();
  useEffect(() => {
    const margin = { top: 10, right: 20, bottom: 60, left: 65 },
      width = 650 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(svgRef.current)
      // .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    const groups = data.map((d) => d.group);

    // Add X axis
    const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
    svg
      .append("g")
      .attr("transform", `translate(-28, ${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .select(".domain")
      .remove()
      .select(".tick:nth-of-type(1)")
      .attr("display", "none");

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 60]).range([height, 0]);
    svg.append("g");

    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#e41a1c", "#02BB7D"]);

    //stack the data? --> stack per subgroup
    const stackedData = d3.stack().keys(subgroups)(data);
    console.log(stackedData);
    // Show the bars
    svg
      .append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .join("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => x(d.data.group))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", 15);
  }, [data, subgroups]);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography sx={{ fontWeight: "bolder" }}>Total cash flow </Typography>
        <Box display={"flex"}>
          <Typography sx={{mr:2 , fontSize:13}}>
            {" "}
            <span style={{ width:'8px', backgroundColor: "#e41a1c" , color: "#e41a1c",borderRadius:'5px'}}>iiii</span> In
          </Typography>
          <Typography sx={{mr:1, fontSize:13}}>
            <span style={{ width:8, backgroundColor: "#02BB7D" , color: "#02BB7D",borderRadius:'5px'}}>iiii</span> Out
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ pb: 1 }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg ref={svgRef} ></svg>
      </div>
    </Box>
  );
}
