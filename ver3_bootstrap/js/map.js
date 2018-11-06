var map;
var markers = [];

function initMap() {
  	var myLatLng = {lat: 1.3534, lng: 103.8164};
    var places = [	
    				/*Left top*/
    				{lat: 1.4307, lng: 101.7033},
    				{lat: 1.3647, lng: 103.6649},
    				{lat: 1.3207, lng: 102.7253},
    				{lat: 1.3327, lng: 102.9259},
    				{lat: 1.4407, lng: 103.8259},
    				{lat: 1.4307, lng: 103.7259},
    				{lat: 1.3907, lng: 106.7859},
    				{lat: 1.4207, lng: 102.7959},
    				/*left bottom*/
    				{lat: 1.3073, lng: 102.8062},
    				{lat: 1.3473, lng: 103.8562},
    				{lat: 1.3973, lng: 103.8262},
    				{lat: 1.4073, lng: 102.8862},
    				{lat: 1.3273, lng: 103.8462},
    				{lat: 1.3573, lng: 103.8162},
    				{lat: 1.3273, lng: 103.8262},
    				{lat: 1.4173, lng: 102.8362},
    				{lat: 1.3873, lng: 103.8392},
    				/*right top*/
    				{lat: 1.4222, lng: 103.8686},
    				{lat: 1.4139, lng: 103.8886},
    				{lat: 1.4188, lng: 103.8786},
    				{lat: 1.3893, lng: 103.8986},
    				{lat: 1.3792, lng: 101.9086},
    				{lat: 1.3285, lng: 103.9986},
    				{lat: 1.3135, lng: 104.0000},
    				/*right bottom*/
    				{lat: 1.3005, lng: 103.6914},
    				{lat: 1.3119, lng: 103.7089},
    				{lat: 1.3401, lng: 103.7189},
    				{lat: 1.3023, lng: 103.6089},
    				{lat: 1.3129, lng: 103.5389},
    			 ];
    var my_places = [
                    {lat: 1.4005, lng: 103.7914},
                    {lat: 1.3419, lng: 103.6889},
                    {lat: 1.3501, lng: 103.61089},
                    {lat: 1.3673, lng: 103.8662},
                    {lat: 1.3819, lng: 103.6389},
                    {lat: 1.4007, lng: 102.8043},
                    {lat: 1.3619, lng: 103.7489},
                    {lat: 1.2957, lng: 103.8168}
    ];
     var my_hotel = [
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
	      title: 'Place Title',
          icon: 'img/hot_spot.svg'
	    });

	    marker.addListener('click', function(){
	    	console.log("marker" + i + " click!");
            document.getElementById("place_info_tab").classList.add("slide_on");
	    });

        markers.push(marker);
    });

    // Create a marker and set its position.
    my_places.forEach(function(place, i){
        var marker = new google.maps.Marker({
          map: map,
          position: place,
          title: 'Place Title',
          icon: 'img/my_place.svg'
        });

        marker.addListener('click', function(){
            console.log("marker" + i + " click!");
            document.getElementById("place_info_tab").classList.add("slide_on");
        });
    });
    hide_markers();

    // Create a marker and set its position.
    my_hotel.forEach(function(place, i){
        var marker_hotel = {
            url: 'img/marker_hotel2.svg',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(45, 63.5),
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