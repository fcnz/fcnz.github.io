var district_style = {
  strokeColor: 'black',
  lineWidth: 2,
  lineJoin: 'bevel'
}

var Map = function(){
  var map;
  var currentRenderedDistricts = [];

  var boundariesGeoJSON = getBoundaryPolygons();

  var initMap = function (lat, lng, zoom){
    var platform = new H.service.Platform({
    'app_id': 'DQ9SXnZ2AO94IjXYgTVY',
    'app_code': 'IVoPXJITL7TIeLAVk4dyhQ'
    });
    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();
    // Instantiate (and display) a map object:
    map = new H.Map(
    document.getElementById('MapComponent'),
    maptypes.normal.map,
    {
      zoom: zoom,
      center: { lng: lng, lat: lat}
    });

    // Enable the event system on the map instance:
    var mapEvents = new H.mapevents.MapEvents(map);

    // adds default map behavior
    var behavior = new H.mapevents.Behavior(mapEvents);



  }




  var colourFromNumber = function (value){
    var min = 0.146040341;
    var max = 0.578562149;
    var use = value / (max - min) + min;
      // 1 = RED
      // 0 = GREEN
      var hue=((1-use)*120).toString(10);
      return ["hsla(",hue,",100%,50%, 0.5)"].join("");

  }

  // area RENDER Functions

  var addDistrict = function(points){
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
        setRegion(districtName)
    })

    map.addObject(polyline);
    return polyline;
  }


  var findDistrictObject = function(name_string){

    for(var i = 0; i <= currentRenderedDistricts.length; i++ ){
      let object = currentRenderedDistricts[i]
      if(name_string === object.getData("name").name){
        return object;
      }
    }
  }


  var initBoundaryShapes = function(){

    // this.boundariesGeoJSON = getBoundaryPolygons();

    boundariesGeoJSON.forEach(function(city, i){

      currentRenderedDistricts[i] = addDistrict(city);

    });
  }


  var updateHeatMap = function(){

    currentRenderedDistricts.forEach(function(map_object){

      var region = map_object.P.name
      var year = observables.year

      var number = _.get(allData, year + '.' + region + '.CV')

      map_object.setStyle(
        Object.assign(district_style,
        {"fillColor": colourFromNumber(number)})
        )

    })

  }

  return {
      init: initMap,
      updateHeatMap: updateHeatMap,
      initBoundaryShapes: initBoundaryShapes,
      findDistrictObject: findDistrictObject
  }

}

var Map = new Map();

Map.init( -41.248461, 174.763336, 6)
Map.initBoundaryShapes();

Map.updateHeatMap()

function highlightRegion() {
  var name = observables.region

  // do the thing
  Map.updateHeatMap()
  Map.findDistrictObject(name).setStyle(
    Object.assign(district_style,
    {"fillColor": '#666'})
    )
}

yearObservers.push(Map.updateHeatMap)
regionObservers.push(highlightRegion)
