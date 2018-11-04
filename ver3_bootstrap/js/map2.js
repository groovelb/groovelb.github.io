var map;
var markers = [];

function initMap() {
  	var myLatLng = {lat: 1.3534, lng: 103.8164};
    var places = [	
    				/*Left top*/
    				
    				{lat: 1.4407, lng: 103.8259},
    				/*left bottom*/
    			
    				{lat: 1.3473, lng: 103.8562},
    				/*right top*/
    				{lat: 1.4222, lng: 103.8686},
    				{lat: 1.4139, lng: 103.8886},
    				/*right bottom*/
    				{lat: 1.3005, lng: 103.6914},
    				{lat: 1.3119, lng: 103.7089}

    			 ];
    var my_places = [
                    {lat: 1.3673, lng: 103.8662}
    ];

    // Create a map object and specify the DOM element
    // for display.
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12,
    disableDefaultUI: true
    });

    // Create a marker and set its position.
    places.forEach(function(place, i){
    	var marker = new google.maps.Marker({
	      map: map,
	      position: place,
	      title: 'Place Title'
	    });

	    marker.addListener('click', function(){
	    	console.log("marker" + i + " click!");
            document.getElementById("place_info_tab").classList.add("slide_on");
	    });

        markers.push(marker);
    });

    // Create a marker and set its position.
    my_places.forEach(function(place, i){
        var marker_hotel = {
            url: 'img/marker_hotel2.svg',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(30, 43),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
          };
        var marker = new google.maps.Marker({
          map: map,
          position: place,
          title: 'Place Title',
          icon: marker_hotel
        });

        marker.addListener('click', function(){
            console.log("marker" + i + " click!");
            document.getElementById("place_info_tab").classList.add("slide_on");
        });
    });
  }

  function hide_markers(){
    markers.forEach(function(marker){
        marker.setMap(null);
    });
  }
    function show_markers(){
    markers.forEach(function(marker){
        marker.setMap(map);
    });
  }