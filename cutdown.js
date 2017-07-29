const util = require('util')
const geojson = require("./territorial-authorities.json")





// console.log("XXXX")
// console.log(geojson.features)

let finallook = {

  "name": "authorit_name",
  coordinates: [
    {lat: 0, lng: 0}
  ],
  start: {lat: 0, lng: 0},
  end: {lat: 0, lng: 0}

}


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


// console.log( geojson.features.length )

for ( let place_obj in geojson.features ) {

  let less_coordinates = [];

  // console.log(geojson.features[place_obj].geometry.type);

  if(geojson.features[place_obj].geometry.type === "Polygon"){
    polygons.push(geojson.features[place_obj])


  } else {
    GeometryCollections.push(geojson.features[place_obj])
  }

}
//// NOW THERE IS 2 arrays

polygons.forEach(function(district_obj){

  let less_coordinates = []


  district_obj.geometry.coordinates[0].forEach(function(coordinates, i){

    if( (i%4) === 0 ){
      less_coordinates.push(makeLatLngObj(coordinates))
    }

  })


  let new_place =  {
    name: district_obj.properties.name,
    startpoint: district_obj.geometry.coordinates[0].shift(),
    endpoint: district_obj.geometry.coordinates[0].pop()
    ,
    coordinates: less_coordinates
  }

  final_polygons.push(new_place);


  // console.log("FULL LENTGTH", district_obj.geometry.coordinates[0].length)
  // console.log("CUT DOWN", new_place.coordinates.length)
})




// process.stdout.write("[")
// final_polygons.forEach(function(obj, i){
//   console.log(JSON.stringify(obj, undefined, 2))
//
//   if(i !== final_polygons.length -1){
//       process.stdout.write(",")
//   }
//
//
// })
// process.stdout.write("]")

console.log(JSON.stringify(final_polygons, undefined, 2));


//
