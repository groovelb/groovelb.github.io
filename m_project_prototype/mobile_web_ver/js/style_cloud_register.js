var svg = d3.select(".style_cloud").append("svg")
						 .attr("class","style_cloud_svg");

var svg_width = parseInt(svg.style("width"));
var svg_height = parseInt(svg.style("height"));

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("collide",d3.forceCollide( function(d){return d.freq + 28 }).iterations(16) )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(svg_width/2, svg_height/2));

d3.json("js/data/fashion_tag.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });
/*
  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", function(d){
      	return d.freq;
      })
      .attr("fill", "#dddddd")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
          */


    var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));


    node.append("circle")
      .attr("class","selector")
      .attr("r", function(d){
          return d.freq;
        })
      .attr("fill", "#dddddd");
      


    node.append("text")
         .attr("class","tag_title")
        .text(function(d) { return d.id; })
        .attr("x",0)
        .attr("y",0);

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
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y +")"; });
  }


});

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
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}


