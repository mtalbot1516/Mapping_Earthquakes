console.log("working")
// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add a marker to the map for LA
// An array containing each city's location, state, and population.
let cityData = cities;
//loop though all cities and log
cityData.forEach(function(city){
    console.log(city.location)
    L.circleMarker(city.location,{
        radius: city.population/100000
    }).addTo(map)
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2 <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
})
//Add 
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
