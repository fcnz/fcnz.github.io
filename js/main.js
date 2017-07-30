// Set up global variables that can be watched as attrs on body element (don't make another body element BTW)
$('body').attr('data-year', 2016)
$('body').attr('data-region', 'Ashburton District')

function updateRegionInfo() {
    var region = $('body').attr('data-region')
    var year = $('body').attr('data-year')

    var CV = _.get(allData, year + '.' + region + '.CV')

    $("#CV").text(CV)
    $("#RegionName").text(region)
}

$('body').bind('change', updateRegionInfo)

updateRegionInfo()
