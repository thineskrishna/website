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
      ['Algeria', 5],
      ['Argentina', 32],
      ['Australia', 6],
      ['Austria', 3],
      ['Belgium', 8],
      ['Brazil', 30],
      ['Canada', 17],
      ['Chile', 8],
        ['China', 5],
      ['Czech Republic', 2],
      ['Egypt', 45],
      ['France', 10],
      ['Germany', 8],
      ['Greece', 9],
      ['Hong Kong', 5],
      ['India', 21],
      ['Indonesia', 13],
      ['Ireland', 28],
      ['Italy', 60],
        ['Iraq', 7],
      ['Japan', 13],
        ['Jordan', 7],
      ['Lebanon', 2],
      ['Libiya', 22],
      ['Malaysia', 20],
      ['Netherlands', 5],
      ['Nicaragua', 1],
      ['Nigeria', 2],
      ['Pakistan', 6],
      ['Palestine', 3],
      ['Philippines', 2],
        ['Peru', 2],
          ['Poland', 7],
      ['Portugal', 14],
      ['Qatar', 4],
      ['Singapore', 6],
      ['Slovenia', 2],
      ['Spain', 51],
      ['Sudan', 4],
      ['Switzerland', 1],
      ['Syria', 6],
      ['Taiwan', 16],
      ['Turkey', 15],
      ['GB', 333],
      ['United States', 54],
      ['Yemen', 1],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
