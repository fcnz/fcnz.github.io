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


// Define points to represent the vertices of a short route in Berlin, Germany:
// var points = [
// ];
var district_style = {
  strokeColor: 'black',
  fillColor: 'rgba(255, 255, 255, 1',
  lineWidth: 5,
  lineJoin: 'bevel'
}

function addDistrict(points){
  var strip = new H.geo.Strip();
  points.forEach(function(point) {
    strip.pushPoint(point);
  });

  var polyline = new H.map.Polygon(strip, { style: district_style });

  polyline.addEventListener('tap', function(evt){
      console.log(evt, "district line" )
  })

  map.addObject(polyline);
}



// function mapPoly(evt){
//   var coord = map.screenToGeo(evt.currentPointer.viewportX,
//             evt.currentPointer.viewportY);
//   points.push({lat: coord.lat, lng: coord.lng})
// }
//
//
//
//
// map.addEventListener('dbltap', function(){
//   addDistrict(points);
//   return points;
// })
//
//
// map.addEventListener('tap', function(evt){
//   var coord = map.screenToGeo(evt.currentPointer.viewportX,
//             evt.currentPointer.viewportY);
//   mapPoly(evt);
//
//
//   console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
//         ((coord.lat > 0) ? 'N' : 'S') +
//         ' ' + Math.abs(coord.lng.toFixed(4)) +
//          ((coord.lng > 0) ? 'E' : 'W'))
//
//
// })



 var place = { name: 'Palmerston North City',
   startpoint: [ 175.618284000021, -40.2717939999777 ],
   endpoint: [ 175.618284000021, -40.2717939999777 ],
   coordinates:
    [ { lng: 175.618284000021, lat: -40.2717939999777 },
      { lng: 175.6682950000232, lat: -40.286716999975006 },
      { lng: 175.75833900002763, lat: -40.26976299996952 },
      { lng: 175.77149200002833, lat: -40.28209199996862 },
      { lng: 175.76686500002808, lat: -40.295733999968895 },
      { lng: 175.7618750000278, lat: -40.30187199996923 },
      { lng: 175.78119200002882, lat: -40.311553999967906 },
      { lng: 175.78182800002878, lat: -40.33413399996781 },
      { lng: 175.77938500002867, lat: -40.337182999967986 },
      { lng: 175.78059600002874, lat: -40.33933699996789 },
      { lng: 175.7760420000285, lat: -40.33973699996821 },
      { lng: 175.77862900002864, lat: -40.34357599996802 },
      { lng: 175.77393500002836, lat: -40.35027899996833 },
      { lng: 175.76948600002814, lat: -40.35758199996862 },
      { lng: 175.7685380000281, lat: -40.35948899996869 },
      { lng: 175.76490800002787, lat: -40.36024399996892 },
      { lng: 175.76176900002767, lat: -40.36345099996913 },
      { lng: 175.76135900002768, lat: -40.36855399996915 },
      { lng: 175.76582100002793, lat: -40.36991499996886 },
      { lng: 175.7660650000279, lat: -40.371991999968834 },
      { lng: 175.7638210000278, lat: -40.373127999968986 },
      { lng: 175.75929000002756, lat: -40.374296999969275 },
      { lng: 175.7579360000275, lat: -40.37677499996937 },
      { lng: 175.75331700002727, lat: -40.37832799996967 },
      { lng: 175.75130600002714, lat: -40.38158599996981 },
      { lng: 175.74787300002694, lat: -40.384787999970015 },
      { lng: 175.7452470000268, lat: -40.387377999970184 },
      { lng: 175.73957400002652, lat: -40.389347999970546 },
      { lng: 175.73707200002642, lat: -40.39211699997071 },
      { lng: 175.73380600002622, lat: -40.39342199997091 },
      { lng: 175.73360800002618, lat: -40.39754099997091 },
      { lng: 175.73086300002606, lat: -40.39970399997109 },
      { lng: 175.72640900002582, lat: -40.40160799997136 },
      { lng: 175.72419200002574, lat: -40.405211999971506 },
      { lng: 175.72506200002576, lat: -40.409701999971446 },
      { lng: 175.72914600002596, lat: -40.41171999997118 },
      { lng: 175.7243290000257, lat: -40.41729099997147 },
      { lng: 175.72353800002566, lat: -40.42182999997153 },
      { lng: 175.71929300002543, lat: -40.42542999997178 },
      { lng: 175.71435700002522, lat: -40.429448999972074 },
      { lng: 175.7066720000248, lat: -40.43322699997254 },
      { lng: 175.58350300001933, lat: -40.52932399997913 },
      { lng: 175.57530700001902, lat: -40.52383099997952 },
      { lng: 175.56892300001877, lat: -40.52061199997982 },
      { lng: 175.57170600001888, lat: -40.513336999979714 },
      { lng: 175.56317800001855, lat: -40.50445999998011 },
      { lng: 175.5504640000181, lat: -40.489413999980705 },
      { lng: 175.50293700001643, lat: -40.42876399998282 },
      { lng: 175.5133200000168, lat: -40.42029899998239 },
      { lng: 175.53266600001749, lat: -40.41261799998158 },
      { lng: 175.54736900001805, lat: -40.40002699998095 },
      { lng: 175.55188100001826, lat: -40.36558899998077 },
      { lng: 175.618284000021, lat: -40.2717939999777 } ] }


addDistrict(place.coordinates);


//
