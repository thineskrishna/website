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
      ['Algeria', 4],
      ['Argentina', 30],
      ['Australia', 5],
      ['Austria', 1],
      ['Barbados', 1],
      ['Belgium', 2],
      ['Benin', 1],
      ['Brazil', 1],
      ['Canada', 17],
      ['Chile', 8],
      ['Czech Republic', 2],
      ['Egypt', 32],
      ['Finland', 1],
      ['France', 10],
      ['Germany', 5],
      ['Greece', 9],
      ['Hong Kong', 5],
      ['India', 5],
      ['Indonesia', 1],
      ['Ireland', 25],
      ['Italy', 22],
      ['Japan', 10],
      ['Lebanon', 2],
      ['Libiya', 15],
      ['Malaysia', 14],
      ['Netherlands', 5],
      ['Nicaragua', 1],
      ['Nigeria', 2],
      ['Pakistan', 2],
      ['Palestine', 3],
      ['Philippines', 3],
      ['Portugal', 11],
      ['Qatar', 4],
      ['Singapore', 3],
      ['Slovenia', 1],
      ['Spain', 36],
      ['Sudan', 3],
      ['Switzerland', 1],
      ['Syria', 4],
      ['Taiwan', 4],
      ['Turkey', 11],
      ['GB', 230],
      ['United States', 40],
      ['Yemen', 1],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
