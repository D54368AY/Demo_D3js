import { useD3 } from "../constants/useD3";
import React from "react";
import * as d3 from "d3";
import { Box, Button, Divider, Typography } from "@mui/material";

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = "220";
      const width = "530";
      const margin = { top: 5, right: 2, bottom: 2, left: 2 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g
          .attr("transform", `translate(-28,${height - margin.bottom})`)
          .call(
            d3
              .axisBottom(x)
              // .tickValues(
              //   d3
              //     .ticks(...d3.extent(x.domain()), width / 40)
              //     .filter((v) => x(v) !== undefined)
              // )
              .tickSizeOuter(0)
          )
          .select(".domain")
          .remove()
          .select(".tick:nth-of-type(1)")
          .attr("display", "none");

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", margin.left)
              .attr("y", margin.left)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          )
          .select(".domain")
          .remove()
          .select(".tick:nth-of-type(1)")
          .attr("display", "none");

      svg.select(".x-axis").call(xAxis);
      //   svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "barDesign")
        .attr("x", (d) => x(d.year))
        .attr("width", 20)
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales));
    },
    [data.length]
  );

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography sx={{ fontWeight: "bolder" }}>Invoice owed to you </Typography>
        <Button variant="salesbutton">New Sales Invoice</Button>
      </Box>

      <Divider sx={{ pb: 1 }} />

      <Box display={"flex"} justifyContent={"center"}>
        <svg
          ref={ref}
          style={{
            height: "240",
            width: "500",
            marginRight: "5px",
            marginLeft: "20px",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </Box>
    </Box>
  );
}

export default BarChart;
