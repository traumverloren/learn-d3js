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

const width = 600;
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
let dataset3 = [];
let numDataPoints = 50;
let xRange = Math.random() * 1000;
let yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    dataset3.push([newNumber1, newNumber2]);
}

const svg3 = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);


let padding = 30;

// scales
let xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset3, function(d) { return d[0]; })])
                    .range([padding, width-padding* 2]);

let yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset3, function(d) { return d[1]; })])
                    .range([height-padding, padding]);

let rScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset3, function(d) { return d[1]; })])
                     .range([2, 5]);

const scatterCircles = svg3.selectAll("circle")
                         .data(dataset3)
                         .enter()
                         .append("circle")
                         .attr("cx", function(d) {
                              return xScale(d[0]);
                         })
                         .attr("cy", function(d) {
                              return yScale(d[1]);
                         })
                         .attr("r", function(d) {
                            return rScale(d[1]);
                        });
  // 
  // const scatterLabels = svg3.selectAll("text")
  //                          .data(dataset3)
  //                          .enter()
  //                          .append("text")
  //                          .text(function(d) {
  //                               return d[0] + "," + d[1];
  //                          })
  //                          .attr("x", function(d) {
  //                               return xScale(d[0]);
  //                          })
  //                          .attr("y", function(d) {
  //                               return yScale(d[1]);
  //                          })
  //                          .attr("font-family", "sans-serif")
  //                          .attr("font-size", "11px")
  //                          .attr("fill", "red");


let xAxis = d3.axisBottom(xScale).ticks(5);
let yAxis = d3.axisLeft(yScale).ticks(4);

svg3.append("g")
   .attr("class", "axis")
   .attr("transform", `translate(0, ${height-padding})`)
   .call(xAxis);

svg3.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(${padding}, 0)`)
  .call(yAxis);
