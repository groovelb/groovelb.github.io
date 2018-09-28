/*SVG Animation*/
fetch('img/svg_usp2.svg')
  .then(r => r.blob())
  .then(b => svg_usp2.data = URL.createObjectURL(b));

 svg_usp2.onload = function(){
 	console.log("load");

 	var svg_usp2 = this;
 	var svg2 = d3.select(svg_usp2.contentDocument).select("svg");

 	/*Map & Land Selection*/
 	var map = svg2.select("#map");
 	var land = svg2.select("#land");

 	/*Markers & Profile Selection per user*/
 	var user1 = svg2.selectAll(".user1");
 	var user2 = svg2.selectAll(".user2");
 	var user3 = svg2.selectAll(".user3");
 	var profile = svg2.selectAll(".profile");

 	/*Markers Selection*/
 	var line1 = svg2.selectAll(".line1");
 	var line2 = svg2.selectAll(".line2");
 	var line3 = svg2.selectAll(".line3");

 	/*Delay of 2nd animation*/
 	var delay = 2600;

 	/*Initiation*/
 	map.style("opacity", 0);
 	land.style("opacity", 1);
 	user1.style("opacity",0);
 	user2.style("opacity",0);
 	user3.style("opacity",0);


 	/*Markers & Profile Appears*/
 	user1.transition().delay(delay + 100).duration(100).style("opacity",1);
 	user2.transition().delay(delay + 200).duration(100).style("opacity",1);
 	user3.transition().delay(delay + 300).duration(100).style("opacity",1);

 	/*Profile & Land  Disappear*/
 	profile.transition().delay(delay + 600).duration(300).style("opacity",0);
 	land.transition().delay(delay + 900).duration(300).style("opacity", 0);

 	/*Markers Scaling*/
 	map.transition().delay(delay + 1200).duration(300).style("opacity",'1');
 }