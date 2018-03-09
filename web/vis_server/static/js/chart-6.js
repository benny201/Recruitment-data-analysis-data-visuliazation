
// button listener
$("#submit-button").click(function () {

    var name = $("#company_name_input").val();

    $.ajax({
           url : "http://127.0.0.1:8000/get_java_requirement/",
           type : "POST",
           data : {
               name: name
           },
           dataType : "json",
           success : function(result) {
             // if (result == "success") {
             //   obj.parents('form').submit();
             // } else {
             //
             // }

               // console.log(result);

               graph = result.data

               console.log(graph);

               d3.select("#chart-6-svg").select(".links").remove();
               d3.select("#chart-6-svg").select(".nodes").remove();

               var svg = d3.select("#chart-6-svg").attr("width", $("#chart-6").width()),
                   width = $("#chart-6").width(),
                   height = 500;

        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        // d3.json("/static/js/miserables.json", function(error, graph) {
            // console.log(1);
          // if (error) throw error;

              var link = svg.append("g")
                  .attr("class", "links")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line")
                  .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

              var node = svg.append("g")
                  .attr("class", "nodes")
                .selectAll("g")
                .data(graph.nodes)
                .enter().append("g")

              var circles = node.append("circle")
                  .attr("r", function (d) {
                      if (d.group == 1) {
                          return 40;
                      } else {
                          return 20;
                      }
                  })
                  .attr("fill", function(d) { return color(d.group); })
                  .call(d3.drag()
                      .on("start", dragstarted)
                      .on("drag", dragged)
                      .on("end", dragended));

              var lables = node.append("text")
                  .text(function(d) {
                    return d.id;
                  })
                  .attr('x', 6)
                  .attr('y', 3);

              node.append("title")
                  .text(function(d) { return d.id; });

              simulation
                  .nodes(graph.nodes)
                  .on("tick", ticked);

              simulation.force("link")
                  .links(graph.links);

              function ticked() {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("transform", function(d) {
                      return "translate(" + d.x + "," + d.y + ")";
                    })
              }

            function dragstarted(d) {
              if (!d3.event.active) simulation.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
            }

            function dragged(d) {
              d.fx = d3.event.x;
              d.fy = d3.event.y;
            }

            function dragended(d) {
              // if (!d3.event.active) simulation.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            }
        }
    })
})



