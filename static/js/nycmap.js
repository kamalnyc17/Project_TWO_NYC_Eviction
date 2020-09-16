var newtry = "static/data/combined_zip.json";
d3.json(newtry, function(response) {
  console.log("Shivani", response);
  var markers2017 = []; 
  var markers2018 = [];
  var markers2019 = [];

  var markers2017Max = [];
  var markers2018Max = [];
  var markers2019Max = [];

// -----------------------------------------------

  for (var i = 0; i < response.length; i++) {

    var data = response[i];

    if(data.year === 2017) {
        // 2017 all evinction zip codes
      markers2017.push(
        L.circle([data.Latitude, data.Longitude], {
          color: "teal",
          fillColor: "teal",
          fillOpacity: 0.75,
          radius: data.total * 2,
          weight: 0.2
        }).bindPopup("<h3>" + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
      )                 
      // 2017 zip codes with eviction > 200
      if (data.total > 200) {
          markers2017Max.push(
              L.circle([data.Latitude, data.Longitude], {
                  color: "teal",
                  fillColor: "teal",
                  fillOpacity: 0.75,
                  radius: data.total * 2,
                  weight: 0.2
              })
          )
      }
    } else if (data.year === 2018) {
        markers2018.push(
          L.circle([data.Latitude, data.Longitude], {
            color: "orange",
            fillColor: "orange",
            fillOpacity: 0.75,
            radius: data.total * 2,
            weight: 0.2
          }).bindPopup("<h3>" + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
        )

          // 2018 zip codes with eviction > 200
          if (data.total > 200) {
            markers2018Max.push(
                L.circle([data.Latitude, data.Longitude], {
                    color: "orange",
                    fillColor: "orange",
                    fillOpacity: 0.75,
                    radius: data.total * 2,
                    weight: 0.2
                })
            )
          }

    } else if (data.year === 2019) {
          markers2019.push(
            L.circle([data.Latitude, data.Longitude], {
              color: "purple",
              fillColor: "purple",
              fillOpacity: 0.75,
              radius: data.total * 2,
              weight: 0.2
          }).bindPopup("<h3>" + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
          )

            // 2019 zip codes with eviction > 200
            if (data.total > 200) {
              markers2019Max.push(
                  L.circle([data.Latitude, data.Longitude], {
                      color: "purple",
                      fillColor: "purple",
                      fillOpacity: 0.75,
                      radius: data.total * 2,
                      weight: 0.2
                  })
              )
            }
        }
  };


// --------------------------------------------------------------------

// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});
// -----------------------------------------------------------------------


var groupedLayer = L.layerGroup([markers2017, markers2017Max, markers2018, markers2019]);
// Create seperate layer for each year 
var y2017 = L.layerGroup(markers2017);
var y2018 = L.layerGroup(markers2018);
var y2019 = L.layerGroup(markers2019);

var y2017Max = L.layerGroup(markers2017Max);
var y2018Max = L.layerGroup(markers2018Max);
var y2019Max = L.layerGroup(markers2019Max);


/// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};


// Overlays that may be toggled on or off
var overlayMaps = {
  // allYears: groupedLayer
  "Year 2017 - All": y2017,
  "Year 2018 - All": y2018,
  "Year 2019 - All": y2019,

  "Year 2017 > 200": y2017Max,
  "Year 2018 > 200": y2018Max,
  "Year 2019 > 200": y2019Max
};

// Define a map object
var myMap = L.map("map", {
    center: [40.730610, -73.935242],
    zoom: 11,
    layers: [streetmap, y2019]
    });


// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
});