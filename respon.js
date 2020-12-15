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
      ['Argentina', 3],
      ['Australia', 2],
      ['Greece', 1],
      ['India', 1],
      ['Ireland', 1],
      ['Italy', 4],
      ['Greece', 3],
      ['Lebanon', 1],
      ['Malaysia', 1],
      ['Netherlands', 2],
      ['Spain', 1],
      ['Turkey', 2],
      ['GB', 17],
      ['United States', 2],
      ['Taiwan', 1],
    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
