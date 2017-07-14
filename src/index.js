import * as d3 from 'd3';
import './styles.css';

let dataset1 = [];                        //Initialize empty array
for (let i = 0; i < 25; i++) {           //Loop 25 times
    let newNumber = Math.random() * 30;  //New random number (0-30)
    dataset1.push(newNumber);             //Add new number to array
}

// bar graph
let graph = d3.select("body").selectAll("div")
    .data(dataset1)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      let barHeight = d * 5;  //Scale up by factor of 5
      return barHeight + "px";
    });

let br = d3.select("body").append('br');

// svg generation
const dataset2 = [ 5, 10, 15, 20, 25 ];
let svg = d3.select("body").append("svg");

let width = 500;
let height = 100;

svg.style("width", width);
svg.style("height", height);

let circles = svg.selectAll("circle")
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
