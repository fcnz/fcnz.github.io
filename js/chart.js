var chart;

/**
 * Call this function to update what data the chart is showing.
 * @param {Integer} year
 * @param {String} region - Cammel cased name of the region (eg. 'farNorthDistrict').
 */
function updateChart() {
  var year = observables.year
  var region = observables.region

    if (!chart) {
        chart = c3.generate({
            bindto: '#chart',
            legend: { show: false },
            tooltip: { format: { value: function(value) { return value } } },
            data: {
                columns: [],
                type: 'pie'
            }
        })
    }

    chart.unload({
        ids: industries
    })

    chart.load({
        columns: _.map(industryCodes, function(code) {
            return [industriesByCode[code], _.get(allData, year + '.' + region + '.' + code)]
        })
    })
}

// Update the chart when either of year or region changes.
yearObservers.push(updateChart)
regionObservers.push(updateChart)

// Initiate the chart
updateChart()