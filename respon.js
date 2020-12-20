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
      ['Argentina', 25],
      ['Australia', 2],
      ['Austria', 1],
      ['Belgium', 1],
      ['Brazil', 1],
      ['Canada', 12],
      ['Chile', 2],
      ['France', 3],
      ['Germany', 2],
      ['Greece', 5],
      ['Hong Kong', 6],
      ['India', 1],
      ['Ireland', 26],
      ['Italy', 8],
      ['Japan', 10],
      ['Lebanon', 2],
      ['Malaysia', 6],
      ['Netherlands', 5],
      ['Nicaragua', 1],
      ['Nigeria', 2],
      ['Pakistan', 2],
      ['Philippines', 1],
      ['Portugal', 4],
      ['Qatar', 4],
      ['Spain', 31],
      ['Switzerland', 1],
      ['Taiwan', 3],
      ['Turkey', 11],
      ['GB', 140],
      ['United States', 30],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
