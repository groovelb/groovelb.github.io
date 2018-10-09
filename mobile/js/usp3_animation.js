/*SVG Animation*/
fetch('img/svg_usp3.svg')
  .then(r => r.blob())
  .then(b => svg_usp3.data = URL.createObjectURL(b));

 svg_usp3.onload = function(){
 	console.log("load");
 	var svg_usp3 = this;
 	var svg3 = d3.select(svg_usp3.contentDocument).select("svg");
 	var plus = svg3.select(".plus");
 	var cash = svg3.select(".cash");

 	/*Initiation*/
 	plus.style("opacity",0);
 	cash.style("opacity",0);

 	/*Delay of 3rd Animaiton*/
 	var delay = 6000;
 	plus.transition().delay(delay).duration(300).style("opacity",1);
 	cash.transition().delay(delay + 100).duration(100).style("opacity",1);
 }