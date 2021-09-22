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
      ['Afghanistan', 1],
      ['Albania', 1],
      ['Algeria', 3],
      ['Argentina', 9],
      ['Australia', 5],
      ['Austria', 1],
      ['Belgium', 3],
      ['Brazil', 9],
      ['Canada', 6],
      ['Chile', 2],
        ['China', 3],
      ['Czech Republic', 1],
      ['Egypt', 18],
      ['France', 5],
      ['Germany', 3],
      ['Greece', 3],
      ['Hong Kong', 2],
      ['India', 13],
      ['Indonesia', 9],
      ['Ireland', 6],
      ['Italy', 13],
        ['Iraq', 3],
      ['Japan', 2],
        ['Jordan', 5],
      ['Lebanon', 1],
      ['Libiya', 13],
      ['Malaysia', 7],
      ['Morocco', 1],
      ['Netherlands', 2],
      ['Nicaragua', 1],
      ['New Zealand', 1],
      ['Nigeria', 2],
      ['Pakistan', 3],
      ['Palestine', 1],
      ['Philippines', 1],
      ['Paraguay', 1],
        ['Peru', 2],
          ['Poland', 2],
      ['Portugal', 6],
      ['Qatar', 1],
      ['Singapore', 3],
      ['Slovenia', 1],
      ['Spain', 18],
      ['Sudan', 4],
      ['Switzerland', 2],
      ['Syria', 3],
      ['Taiwan', 4],
      ['Turkey', 8],
      ['GB', 111],
      ['United States', 23],
      ['Yemen', 1],
      ['Uruguay', 1],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
