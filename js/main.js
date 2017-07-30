// Set up global variables that can be watched as attrs on body element (don't make another body element BTW)
$('#DataYear').attr('data-year', 2016)
$('#DataRegion').attr('data-region', 'Ashburton District')

function updateRegionInfo() {
    var region = $('#DataRegion').attr('data-region')
    var year = $('#DataYear').attr('data-year')

    var CV = _.get(allData, year + '.' + region + '.CV')

    $("#CV").text(CV)
    $("#RegionName").text(region)
}

$('#DataRegion').bind('change', updateRegionInfo)
$('#DataYear').bind('change', updateRegionInfo)

updateRegionInfo()
