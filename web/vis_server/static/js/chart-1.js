// chart 1 - pie chart for companies and population
// type: less than 15 / 15 - 50 / 50 - 150 / 150 - 500 / 500 - 2000 / more than 2000

function draw_pie_chart(data) {
    var width = $("#chart-1").width(),
        height = 500,
        radius = 200;

    var color = d3.scaleOrdinal()
        .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0)
        .cornerRadius(5);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.value; });

    var svg = d3.select("#chart-1").append("svg")
        .attr("width", '100%')
        .attr("height", 500)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter()
        .append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.value); });

    g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });

    // g.append("text")
    //     .attr("dx", 30)
    //     .attr("dy", -5)
    //     .append("textPath")
    //     .attr("xlink:href", function(d, i) {
    //         return "#arc-" + i;
    //     })
    //     .text(function(d) {
    //         return "这里";
    //     })
}


// draw_pie_chart(data);


function get_chart_1_data() {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8000/get_company_population/',
        success: function (data) {
            // console.log(data)
            draw_pie_chart(data.data)
        }
    })
}

// draw charts
get_chart_1_data();