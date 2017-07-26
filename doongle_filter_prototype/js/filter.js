
//size
var width = 414;
var height = 96;


//SVG
var svg = d3.select("#age").append("svg")
				 .attr("width",width)
				 .attr("height",height)
				 .style("background-color","#ffffff");

var g_svg = svg.append("g")
			   .attr("transform","translate(0,0)");


//Gradient Mask
var defs = svg.append("defs");
var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "100%")
   .attr("y1", "0%")
   .attr("y2", "100%");
gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "0%")
   .attr("stop-color", "#e0cf0f")
   .attr("stop-opacity", 1);
gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "100%")
   .attr("stop-color", "#ff2a5b")
   .attr("stop-opacity", 1);

//data
var dataCon;


//Scale
var xScale;
var yScale;


//Axis
var xAxis;
var yAxis;


//line object
var graph_line;
//line path
var line_path;

d3.csv("data/doongle_age.csv",function(data){
	data.forEach(function(d){
		d.birth_year = 2017-d.birth_year;
		d.count = +d.count;
	});

	dataCon = data;
	var maxValue = d3.max(dataCon, function(d){ return d.count});

	//scale setting
	xScale = d3.scale.linear()
					 .domain([13,60])
					 .range([0,width]);

	yScale = d3.scale.linear()
					 .domain([0,maxValue])
					 .range([height,0]);

	var xAxis = d3.svg.axis()
					  .scale(xScale)
					  .orient("bottom")
					  .tickSize(5,0);

	var xAxis_g = g_svg.append("g")
					   .attr("class","age_axis")
					   .attr("transform","translate(0,"+ (height - 30) +")");


	graph_line = d3.svg.line()
					   .x(function(d){return xScale(d.birth_year)})
					   .y(function(d){return yScale(d.count)})
					   .interpolate("basis");

	line_path = g_svg.append("g")
					 .attr("class","age_line")
					 .attr("transform","translate(0,0)")
					 .append("path")
					 .datum(dataCon)
					 .attr("d",graph_line)
					 .attr("stroke","url(#svgGradient)")
					 .attr("fill","none");

});