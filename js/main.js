// Set up global variables that can be watched as attrs on body element (don't make another body element BTW)
var observables = {
    year: 2016,
    region: 'Ashburton District'
}
var yearObservers = [];
var regionObservers = [];
function setYear(year) {
    observables.year = year
    yearObservers.forEach(function(f) { f() })
}

function setRegion(region) {
    observables.region = region
    regionObservers.forEach(function(f) { f() })
}

function updateRegionInfo() {
    var region = observables.region
    var year = observables.year

    var CV = _.get(allData, year + '.' + region + '.CV')

    $("#CV").text(CV)
    $("#RegionName").text(region)
}

yearObservers.push(updateRegionInfo)
regionObservers.push(updateRegionInfo)
