// Initialize the platform object:
var platform = new H.service.Platform({
'app_id': 'DQ9SXnZ2AO94IjXYgTVY',
'app_code': 'IVoPXJITL7TIeLAVk4dyhQ'
});
// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();
// Instantiate (and display) a map object:
var map = new H.Map(
document.getElementById('mapContainer'),
maptypes.normal.map,
{
  zoom: 7,
  center: { lng: 174.763336, lat: -36.848461 }
});

// Enable the event system on the map instance:
var mapEvents = new H.mapevents.MapEvents(map);

// adds default map behavior
var behavior = new H.mapevents.Behavior(mapEvents);


var district_style = {
  strokeColor: 'black',
  lineWidth: 5,
  lineJoin: 'bevel'
}

const currentRenderedDistricts = [];
var boundariesGeoJSON = getBoundaryPolygons();



// area RENDER Functions

function addDistrict(points){
  var strip = new H.geo.Strip();
  points.coordinates.forEach(function(point) {
    strip.pushPoint(point);
  });



  var polyline = new H.map.Polygon(strip,
    { style: Object.assign(district_style, {
    fillColor: colourFromNumber(1),}) } );

  polyline.setData({name: points.name})

  // add envent lister to each boundary obj
  polyline.addEventListener('tap', function(evt){
      let districtName = evt.target.P.name
      let districtObject = findDistrictObject(districtName)
  })

  map.addObject(polyline);
  return polyline;
}



function findDistrictObject(name_string){

  for(var i = 0; i <= currentRenderedDistricts.length; i++ ){
    let object = currentRenderedDistricts[i]
    if(name_string === object.getData("name").name){
      console.log(name_string)
      break;
    }
  }
}



boundariesGeoJSON.forEach(function(city, i){

  currentRenderedDistricts[i] = addDistrict(city);

})





function updateHeatMap(){



}

function colourFromNumber(number){




  return 'rgba(255, 255, 255, 0.5';
}



//
