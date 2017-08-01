
//size
var svg_width = 414;
var svg_height = 100;
var margin = {top: 4,
			 left:10, 
			 bottom:4,
			 right: 10};

var graph_width = svg_width - margin.left;
var graph_height = svg_height - margin.top - margin.bottom;

//SVG
var svg = d3.select("#div_age").append("svg")
				 .attr("width",svg_width)
				 .attr("height",svg_height)
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
var filteredData;


//Scale
var xScale;
var yScale;

//Axis
var xAxis;
var yAxis;

//line object
var graph_line;
var graph_line_filtered

//line path
var line_path_col;
var line_path_gray;

d3.csv("data/doongle_age2.csv",function(data){
	data.forEach(function(d){
		d.birth_year = 2017-d.birth_year;
		d.count = +d.count;
	});

	dataCon = data;
	var maxValue = d3.max(dataCon, function(d){ return d.count});

	//scale setting
	xScale = d3.scale.linear()
					 .domain(d3.extent(data, function(d) { return d.birth_year; }))
					 .range([margin.left, graph_width]);

	yScale = d3.scale.linear()
					 .domain([0,maxValue])
					 .range([graph_height - margin.top, margin.bottom]);

	/*
	var xAxis = d3.svg.axis()
					  .scale(xScale)
					  .orient("bottom")
					  .tickSize(5,0);

	var xAxis_g = g_svg.append("g")
					   .attr("class","age_axis");
					   //.attr("transform","translate(0,"+ (height - 30) +")");
	*/


	graph_line = d3.svg.line()
					   .x(function(d){return xScale(d.birth_year)})
					   .y(function(d){return yScale(d.count)})
					   .interpolate("cardinal");

	line_path_gray = g_svg.append("g")
						  .attr("class","age_line")
						  .attr("id","gray_line")
						  .attr("transform","translate(0,0)")
						  .append("path")
						  .datum(dataCon)
						  .attr("d",graph_line)
						  .attr("stroke","#f3f0f0")
						  .attr("fill","none");

	line_path_col = g_svg.append("g")
						 .attr("class","age_line")
						 .attr("id","color_line")
						 .attr("transform","translate(0,0)")
						 .append("path")
						 .datum(dataCon)
						 .attr("d",graph_line)
						 .attr("stroke","url(#svgGradient)")
						 .attr("fill","none");

});





function filterPop(value){
	if(value=="online"){
		updateData();
		
	}else if(value=="all"){
		revertData();
	}
}


function popAge(min_age, max_age){
    var popData = dataCon.filter(function(d){ return (min_age <= d.birth_year)&&(d.birth_year <= max_age);})

    d3.select("#color_line").selectAll("path")
                            .datum(popData)
                            .attr("d",graph_line)
                            .transition()
                            .duration(2000);
}

function updateData(){

	d3.csv("data/doongle_age_filtered.csv",function(data){

		data.forEach(function(d){
			d.birth_year = 2017-d.birth_year;
			d.count = +d.count;
		});

		dataCon = data;
		var maxValue = d3.max(dataCon, function(d){ return d.count});

		xScale.domain(d3.extent(dataCon, function(d) { return d.birth_year; }));
		yScale.domain([0,maxValue]);

		 d3.select("#color_line").selectAll("path")
						 .datum(dataCon)
						 .attr("d",graph_line)
						 .transition();

		d3.select("#gray_line").selectAll("path")
						 .datum(dataCon)
						 .attr("d",graph_line)
						 .transition();
		});

}

function revertData(){

	d3.csv("data/doongle_age2.csv",function(data){

		data.forEach(function(d){
			d.birth_year = 2017-d.birth_year;
			d.count = +d.count;
		});

		dataCon = data;
		var maxValue = d3.max(dataCon, function(d){ return d.count});

		xScale.domain(d3.extent(dataCon, function(d) { return d.birth_year; }));
		yScale.domain([0,maxValue]);

		 d3.select("#color_line").selectAll("path")
						 .datum(dataCon)
						 .attr("d",graph_line)
						 .transition();

		d3.select("#gray_line").selectAll("path")
						 .datum(dataCon)
						 .attr("d",graph_line)
						 .transition();
		});

}