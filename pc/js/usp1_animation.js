/*SVG Size*/
	var width = 400;
	var height = 220

	/*Object Size*/
	var hotel_w = 120;
	var hotel_h = 123;

	var marker_w = 31;
	var marker_h = 45;

	var coin_w = 40;
	var coin_h = 40;

	var svg1 = d3.select("#svg_usp1").append("svg")
					 .attr("id","svg1")
					 .attr("width",width)
					 .attr("height",height);

	/*Hotel*/
	var hotel_g = svg1.append("g")
					  .attr("transform","translate(" + (width - hotel_w)/2 + "," + (height - hotel_h)/2 + ")");
	/* 120 X 123 */
	var hotel_path = hotel_g.append("path")
					.attr("d",hotel_path)
					.attr("fill","#00695C");

	/*Marker*/
	var marker_x = (width - hotel_w)/2;
	var marker_y1 = 20;
	var marker_y2 = 110;
	var marker_g = svg1.append("g")
						.attr("transform","translate(" + marker_x + "," + marker_y1 + ")")
						.attr("opacity",0);

	var marker_path = marker_g.append("path")
					   .attr("d",marker_path)
					   .attr("fill","#ffffff")


	/*Coin*/
	var coin_x = (width - hotel_w)/2 + 8;
	var coin_y1 = height + coin_h;
	var coin_y2 = 118;
	var coin_g = svg1.append("g")
					   .attr("transform","translate(" + coin_x + "," + coin_y1 + ")");

	var coin_path = coin_g.append("path")
						  .attr("d",coin_path)
						  .attr("fill","#FDD835");


	/*Animation*/
	marker_g.transition()
			.duration(600)
			.ease(d3.easeExpIn)
			.attr("opacity",1)
			.attrTween("transform",function(){
				return function(t){ 
					console.log(t);
					return "translate(" + marker_x + "," + (marker_y1 + t*(marker_y2 - marker_y1)) + ")"; }
			});

	marker_g.transition()
			.delay(900)
			.duration(300)
			.attr("opacity",0);


	coin_g.transition()
			.delay(900)
			.duration(600)
			.ease(d3.easeElastic)
			.attr("opacity",1)
			.attrTween("transform",function(){
				return function(t){ 
					console.log(t);
					return "translate(" + coin_x + "," + (coin_y1 + t*(coin_y2 - coin_y1)) + ")"; }
			});