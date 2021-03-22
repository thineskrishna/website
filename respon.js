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
      ['Argentina', 30],
      ['Australia', 6],
      ['Austria', 2],
      ['Belgium', 2],
      ['Brazil', 19],
      ['Canada', 17],
      ['Chile', 8],
        ['China', 3],
      ['Czech Republic', 2],
      ['Egypt', 38],
      ['France', 10],
      ['Germany', 5],
      ['Greece', 9],
      ['Hong Kong', 5],
      ['India', 18],
      ['Indonesia', 1],
      ['Ireland', 28],
      ['Italy', 54],
        ['Iraq', 7],
      ['Japan', 10],
        ['Jordan', 7],
      ['Lebanon', 2],
      ['Libiya', 22],
      ['Malaysia', 16],
      ['Netherlands', 5],
      ['Nicaragua', 1],
      ['Nigeria', 2],
      ['Pakistan', 2],
      ['Palestine', 3],
      ['Philippines', 3],
        ['Peru', 2],
          ['Poland', 7],
      ['Portugal', 11],
      ['Qatar', 4],
      ['Singapore', 6],
      ['Slovenia', 1],
      ['Spain', 51],
      ['Sudan', 4],
      ['Switzerland', 1],
      ['Syria', 6],
      ['Taiwan', 13],
      ['Turkey', 15],
      ['GB', 290],
      ['United States', 53],
      ['Yemen', 1],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
