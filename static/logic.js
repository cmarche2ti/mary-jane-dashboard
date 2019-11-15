
// import data
var crimeCSV = "data/mj_crime_clean.csv"
var businessLocations = "data/marijuana_businesses.csv"
var mj_taxes_2018 = "data/ALL_MJ_Tax_Data.csv"

// Initialize map object
var myMap = L.map("map-id", {
    center: [39.739890,-104.969698],
    zoom: 12
  });

// Mapbox tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 13,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

// Marijuana businesses Using Marker Clusters
  window.denverBusinessLocationsLayer;
  d3.csv(businessLocations, function(response) {
    // Create a new marker cluster group
    var markers = L.markerClusterGroup({
      zoomToBoundsOnClick: true
    });
  
    // Loop through data to creat markers for each business listed
    for (var i = 0; i < response.length; i++) {
      var busiLat = +response[i].latitude
      var busiLon = +response[i].longitude

      if (response[i].Trade_Name) {
        var trade_name = response[i].Trade_Name
      } else {
        trade_name = "Not Available"
      }

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([busiLat, busiLon])
          .bindPopup(
            "<h5>" + trade_name +
            "</h5><hr><p>Type: " + response[i].License_Type + "</p>"
          ));
    }
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
    window.denverBusinessLocationsLayer = markers;
  
  });

  // Read data for the crime layer 
  d3.csv(crimeCSV, function(d) { 
    var heatArray = [];
  
    for (var i = 0; i < d.length; i++) {
      var lat = +d[i]['GEO_LAT']
      var lon = +d[i]['GEO_LON']
      heatArray.push([lat,lon]);
    }
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);

    window.denverCrimeHeatLayer = heat;
  });
  

  // Function to reset layers when different checkboxes are checked.
  var resetLayersOnMap = (e)=>{
    console.log(e);
    console.log('Changed');
    var isBusinessCheckboxChecked = d3.select('[name="business_checkbox"]').node().checked;
    var isCrimeCheckboxChecked = d3.select('[name="crime_checkbox"]').node().checked;
    // if (d3.event.target.checked){
    if (isBusinessCheckboxChecked){
      myMap.addLayer(window.denverBusinessLocationsLayer)
    } else {
      myMap.removeLayer(window.denverBusinessLocationsLayer)  
    }
    if (isCrimeCheckboxChecked){
      myMap.addLayer(window.denverCrimeHeatLayer)
    } else {
      myMap.removeLayer(window.denverCrimeHeatLayer)  
    }
    
  }

  d3.select('[name="business_checkbox"]').on('change', resetLayersOnMap)
  d3.select('[name="crime_checkbox"]').on('change', resetLayersOnMap)
  