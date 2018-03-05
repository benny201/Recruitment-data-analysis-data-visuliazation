// chart 1 - pie chart for companies and population
// type: less than 15 / 15 - 50 / 50 - 150 / 150 - 500 / 500 - 2000 / more than 2000

// /* Initialize tooltip */
// tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });
//
// /* Invoke the tip in the context of your visualization */
// vis.call(tip)

function draw_pie_chart(data) {
    var width = $("#chart-1").width(),
        height = 500,
        radius = 200;

    var color = d3.scaleOrdinal()
        // .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);
        .range(["#98abc5", "#8a89a6", "#a05d56", "#d0743c", "#ff8c00"]);
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

    var tip = d3.tip()
                  .attr('class', 'd3-tip')
                  .offset([-10, 0])
                  .html(function(d) {
                    return "<strong>Amount:</strong> <span style='color:withe'>" + d.value  +"</span>";
                  })

    svg.call(tip);

    var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter()
        .append("g")
      .attr("class", "arc")
        .attr("id", "arcs")
        .on('mouseover', tip.show)
          .on('mouseout', tip.hide);



    g.append("path")
      .attr("d", arc)
        .attr("id", function(d, i) { return "arc-" + i })
      .style("fill", function(d) { return color(d.value); });

    g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("font-weight", 'bold')
        .style("font-size", 'medium')
      .text(function(d) { return d.value; });

    g.append("text")
        .attr("dx", 45)
        .attr("dy", -10)
        .append("textPath")
        .attr("xlink:href", function(d, i) { return "#arc-" + i; })
        .text(function(d) { console.log(d);return d.data.range })
}


// draw_pie_chart(data);


function get_chart_1_data() {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8000/get_company_population/',
        success: function (data) {
            draw_pie_chart(data.data)
        }
    })
}

// draw charts
get_chart_1_data();





