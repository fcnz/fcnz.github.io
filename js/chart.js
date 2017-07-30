var chart;

/**
 * Call this function to update what data the chart is showing.
 * @param {Integer} year
 * @param {String} region - Cammel cased name of the region (eg. 'farNorthDistrict').
 */
function updateChart() {
  var year = $('body').attr('data-year')
  var region = $('body').attr('data-region')

  if (!chart) {
    chart = c3.generate({
      bindto: '#chart',
      legend: { show: true },
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
$('body').bind('change', updateChart);

// Initiate the chart
updateChart()
