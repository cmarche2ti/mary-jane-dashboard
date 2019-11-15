// var year = ['2016', '2017', '2018']
// var tax_amount = ['67470424','112313022','163734100']

d3.json('/taxes', function (taxes_data) {
  
  var year = taxes_data.map(_=>_.year)
  var tax_amount = taxes_data.map(_=>_.tax)
  

  // Create the Trace
  var trace1 = {
    x: year,
    y: tax_amount,
    type: "bar",
    marker: {
      color: ['greenyellow', 'limegreen', 'mediumseagreen']
    }
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    autosize: false,
    width: 500,
    height: 400,
    title: {
      text: "Marijauna Tax Per Year", font: {
        family: 'Arial, Helvetica, sans-serif',
        size: 24,
        color: "green"
      }
    },
    yaxis: { title: "Tax Dollars ($)", color: "green", },
    xaxis: { automargin: "Year", color: "green", tickvals: [2016, 2017, 2018] },
    showlegend: false
  };
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("tax-bar", data, layout);

})