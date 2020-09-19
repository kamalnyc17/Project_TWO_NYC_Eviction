// loading data from json
const allData = "static/data/combined_zip.json";

// entry point
const evictionTotal = (id) => {
    // removing & recrating 'map' div to avoid declaration issue with Leaflet
    const mapChild = document.getElementById("map");
    mapChild.remove()
    const mapPapa = document.getElementById("mapPapa");
    const childDiv = document.createElement('div');
    childDiv.setAttribute("id", "map")
    childDiv.setAttribute("style", "height: 600px; margin-top: 15px")
    mapPapa.appendChild(childDiv)
    // setting eviction threshold based on user input
    let totalMinEviction, totalMaxEviction
    switch (id) {
        case "All Evictions":
            totalMinEviction = 1;
            totalMaxEviction = 99999;
            break;
        case "Upto 100 per Yr":
            totalMinEviction = 1;
            totalMaxEviction = 100;
            break;
        case "101 - 200 per Yr":
            totalMinEviction = 101;
            totalMaxEviction = 200;
            break;
        case "201 - 300 per Yr":
            totalMinEviction = 201;
            totalMaxEviction = 300;
            break;
        case "More than 300 per Yr":
            totalMinEviction = 301;
            totalMaxEviction = 99999;
            break;
    }

    d3.json(allData, function (response) {
        let markers2017 = [];
        let markers2018 = [];
        let markers2019 = [];

        for (let i = 0; i < response.length; i++) {

            let data = response[i];
            if ((data.total >= totalMinEviction) & (data.total < totalMaxEviction)) {
                if (data.year === 2017) {
                    // 2017 all evinction zip codes
                    markers2017.push(
                        L.circle([data.Latitude, data.Longitude], {
                            color: "teal",
                            fillColor: "teal",
                            fillOpacity: 0.75,
                            radius: data.total * 2,
                            weight: 0.2
                        }).bindPopup("<h3>Year: " + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
                    )
                } else if (data.year === 2018) {
                    markers2018.push(
                        L.circle([data.Latitude, data.Longitude], {
                            color: "orange",
                            fillColor: "orange",
                            fillOpacity: 0.75,
                            radius: data.total * 2,
                            weight: 0.2
                        }).bindPopup("<h3>Year: " + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
                    )
                } else if (data.year === 2019) {
                    markers2019.push(
                        L.circle([data.Latitude, data.Longitude], {
                            color: "purple",
                            fillColor: "purple",
                            fillOpacity: 0.75,
                            radius: data.total * 2,
                            weight: 0.2
                        }).bindPopup("<h3>Year: " + data.year + "</h3> <hr> <h3>Zip Code: " + data.Zip + "</h3> <hr> <h3>No. of Eviction: " + data.total + "</h3>")
                    )
                }
            }
        };

        // various map Layers
        const streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/streets-v11",
            accessToken: API_KEY
        });
        const darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "dark-v10",
            accessToken: API_KEY
        });
        const lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/light-v10",
            accessToken: API_KEY
        });
        // Create seperate layer for each year 
        let y2017 = L.layerGroup(markers2017);
        let y2018 = L.layerGroup(markers2018);
        let y2019 = L.layerGroup(markers2019);

        /// Create a baseMaps object
        const baseMaps = {
            "Street Map": streetmap,
            "Dark Map": darkmap,
            "Light Map": lightMap
        };

        // Overlays that may be toggled on or off
        const overlayMaps = {
            "Year 2017": y2017,
            "Year 2018": y2018,
            "Year 2019": y2019,
        };

        // Define a map object
        const myMap = L.map("map", {
                center: [40.730610, -73.935242],
                zoom: 11,
                layers: [streetmap, y2019]
            });
        // Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(myMap);

    });
}

// initial call
evictionTotal("All Evictions")