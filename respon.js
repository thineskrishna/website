setTimeout(function() {
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyBsx4s_RffJhygEKwA5HewQBs8gmYFOlxQ'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Registrations'],
      ['Argentina', 30],
      ['Australia', 2],
      ['Austria', 1],
      ['Belgium', 2],
      ['Brazil', 1],
      ['Canada', 15],
      ['Chile', 8],
      ['Czech Republic', 1],
      ['Egypt', 5],
      ['France', 5],
      ['Germany', 2],
      ['Greece', 8],
      ['Hong Kong', 6],
      ['India', 5],
      ['Indonesia', 1],
      ['Ireland', 27],
      ['Italy', 21],
      ['Japan', 10],
      ['Lebanon', 2],
      ['Malaysia', 15],
      ['Netherlands', 5],
      ['Nicaragua', 1],
      ['Nigeria', 2],
      ['Pakistan', 2],
      ['Philippines', 1],
      ['Portugal', 5],
      ['Qatar', 4],
      ['Singapore', 3],
      ['Spain', 31],
      ['Sudan', 1],
      ['Switzerland', 1],
      ['Taiwan', 3],
      ['Turkey', 11],
      ['GB', 166],
      ['United States', 30],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
