const util = require('util')
const geojson = require("./territorial-authorities.json")


const RESOLUTION_X_FACTOR = process.argv[2];

let polygons = [];
let GeometryCollections = [];
let final_polygons = [];

function makeLatLngObj(arr){
  let safe = {
    lng: arr[0],
    lat: arr[1]
  }

  return safe;
}


for ( let place_obj in geojson.features ) {

  let less_coordinates = [];


  if(geojson.features[place_obj].geometry.type === "Polygon"){
    polygons.push(geojson.features[place_obj])


  } else {
    GeometryCollections.push(geojson.features[place_obj])
  }

}
//// NOW THERE IS 2 arrays


function convert_coordinates(coordinates){
  let less_coordinates = []

  coordinates[0].forEach(function(coordinates, i){

    if( (i% RESOLUTION_X_FACTOR) === 0 ){
      less_coordinates.push(makeLatLngObj(coordinates))
    }

  })

  return less_coordinates
}

function resolution_exceptions(name){
  const exceptions = [
    "Area Outside Territorial Authority",
    "Far North District",
    "Thames-Coromandel District"
  ]


  exceptions.forEach(function(place){
    if(name === place){
      console.log("COMPARISON: ", name, " ", place)
      return true;
    }
  })
}




polygons.forEach(function(district_obj){
  if(resolution_exceptions(district_obj.properties.name)){
    return;
  }


  const less_coordinates = convert_coordinates(district_obj.geometry.coordinates)

  let new_place =  {
    name: district_obj.properties.name,
    startpoint: district_obj.geometry.coordinates[0].shift(),
    endpoint: district_obj.geometry.coordinates[0].pop()
    ,
    coordinates: less_coordinates
  }

  final_polygons.push(new_place);

})


GeometryCollections.forEach(function(GeometryCollections){
  if(resolution_exceptions(GeometryCollections.properties.name)){
    return;
  }


  GeometryCollections.geometry.geometries.forEach(function(geometry){

    // console.log(JSON.stringify(geometry.coordinates, undefined, 2));

    let new_place =  {
      name: GeometryCollections.properties.name,
      startpoint: geometry.coordinates[0].shift(),
      endpoint: geometry.coordinates[0].pop(),
      coordinates: convert_coordinates(geometry.coordinates)
    }

    final_polygons.push(new_place);

  })


})






// EXPORT to std.out as a js function
// console.log("function getBoundaryPolygons(){ return ");
// console.log(JSON.stringify(final_polygons, undefined, 2));
// console.log("}");


















//
