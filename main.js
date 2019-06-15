function initMap() {
    var myOptions = {
      zoom: 8,
      center: {lat: 53.480759, lng: -2.242631},
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true,
      // Step 4. Customize displayed controls
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    // Step 2. Add custom icon
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: {lat: 53.480759, lng: -2.242631},
      icon: iconBase + 'flag_maps.png',
      map: map
    });
    // Step 3. Add info window
    var contentString = '<div id="content"><h2 id="firstHeading" class="firstHeading">Custom info window</h2><p>This is a cool custom info window.</p></div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  //test