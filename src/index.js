import * as d3 from 'd3';
import './styles.css';

let title = d3.select("body")
           .append("p")
           .text("Bar Graph")
           .style("font-family", "sans-serif")
           .style("font-size", "36px")
           .style("color", "darkturquoise");

const br = d3.select("body").append('br');

let dataset1 = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25];                        //Initialize empty array


let svg1 = d3.select("body")
           .append("svg")
           .attr("width", width)
           .attr("height", height);

const width = 500;
const height = 100;
const barPadding = 1;

// bar graph
const graph = svg1.selectAll("rect")
    .data(dataset1)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
      return i * (width / dataset1.length);
    })
    .attr("y", function(d) {
      return height - (d*4);
    })
    .attr("width", width / dataset1.length - barPadding)
    .attr("height", function(d) {
      return d*4;
    })
    .attr("fill", function(d) {
    return `rgb(0, ${d * 10}, ${d * 10})`;
});

const graphLabels = svg1.selectAll("text")
    .data(dataset1)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
        return i * (width / dataset1.length) + (width / dataset1.length - barPadding) / 2;
   })
   .attr("y", function(d) {
        return height - (d * 4) + 14;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white");

 const circleTitle = d3.select("body")
            .append("p")
            .text("Circles Graph")
            .style("font-family", "sans-serif")
            .style("font-size", "36px")
            .style("color", "darkturquoise");

 br;

// svg generation
const dataset2 = [ 5, 10, 15, 20, 25 ];
const svg2 = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

const circles = svg2.selectAll("circle")
    .data(dataset2)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
            return (i * 50) + 50;
        })
       .attr("cy", height/2)
       .attr("r", function(d) {
            return d;
       })
       .attr("fill", "teal")
      .attr("stroke", "darkturquoise")
      .attr("stroke-width", function(d) {
          return d/2;
      });

const scatterTitle = d3.select("body")
           .append("p")
           .text("Scatter Plot")
           .style("font-family", "sans-serif")
           .style("font-size", "36px")
           .style("color", "darkturquoise");

br;

// scatter plot
var dataset3 = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

const svg3 = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

const scatterCircles = svg3.selectAll("circle")
                         .data(dataset3)
                         .enter()
                         .append("circle")
                         .attr("cx", function(d) {
                              return d[0];
                         })
                         .attr("cy", function(d) {
                              return d[1];
                         })
                         .attr("r", function(d) {
                            return Math.sqrt(height - d[1]);
                        });

  const scatterLabels = svg3.selectAll("text")
                           .data(dataset3)
                           .enter()
                           .append("text")
                           .text(function(d) {
                                return d[0] + "," + d[1];
                           })
                           .attr("x", function(d) {
                                return d[0];
                           })
                           .attr("y", function(d) {
                                return d[1];
                           })
                           .attr("font-family", "sans-serif")
                           .attr("font-size", "11px")
                           .attr("fill", "red");
