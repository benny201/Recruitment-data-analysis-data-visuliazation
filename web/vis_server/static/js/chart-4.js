(function() {
    // set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = $("#chart-4").width() - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#chart-4-svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var tip = d3.tip()
                  .attr('class', 'd3-tip')
                  .offset([-10, 0])
                  .html(function(d) {
                    return "<strong>"+ d.Range+ ":" +"</strong> <span style='color:withe'>" + d.Salary  +"</span>";
                  })

svg.call(tip);

// get the data
d3.csv("/static/js/chart_4_data.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.Salary = +d.Salary;
    console.log(d.Salary)
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.Range; }));
  y.domain([0, d3.max(data, function(d) { return d.Salary; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Range); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.Salary); })
      .attr("height", function(d) { return height - y(d.Salary); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  svg.selectAll("text.bar")
      .data(data)
    .enter().append("text")
      .attr("class", "bar")
      .attr("text-anchor", "middle")
      .attr("x", function(d) { return x(d.Range) + x.bandwidth()/2; })
      .attr("y", function(d) { return y(d.Salary) - 5; })
      .text(function(d) { return d.Salary; })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);;

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
})();
