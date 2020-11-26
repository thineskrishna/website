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
      ['Argentina', 24],
      ['Australia', 13],
      ['Austria', 1],
      ['Bahrain', 1],
      ['Belgium', 3],
      ['Brazil', 4],
      ['Canada', 6],
      ['Chile', 4],
      ['China', 3],
      ['Croatia', 1],
      ['Czech Republic', 2],
      ['Denmark', 1],
      ['Egypt', 1],
      ['Estonia', 1],
      ['Finland', 1],
      ['France', 5],
      ['Georgia', 2],
      ['Germany', 3],
      ['Greece', 5],
      ['Hong Kong', 2],
      ['Hungary', 5],
      ['Iceland', 1],
      ['India', 20],
      ['Indonesia', 12],
      ['Ireland', 13],
      ['Italy', 11],
      ['Japan', 1],
      ['Jordan', 2],
      ['Lebanon', 1],
      ['Libya', 2],
      ['Malaysia', 19],
      ['Mexico', 4],
      ['Myanmar', 1],
      ['Netherlands',3],
      ['Poland', 1],
      ['Pakistan', 4],
      ['Panama', 2],
      ['Paraguay', 1],
      ['Peru', 2],
      ['Philippines', 1],
      ['Portugal', 6],
      ['Qatar', 1],
      ['Saudi Arabia', 1],
      ['Singapore', 5],
      ['Slovenia',2],
      ['South Africa', 1],
      ['Spain', 36],
      ['Sweden', 1],
      ['Taiwan', 5],
      ['Thailand', 1],
      ['Turkey', 6 ],
      ['United Arab Emirates', 1],
      ['United States', 28],
      ['Venezuela', 1],
      ['Vietnam', 2],
      ['GB', 342],
      ['Switzerland', 1],

    ]);

    var options = {
      colorAxis: {colors: ['#90EE90','black', 'blue', '#e31b23']},
      };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}    }, 500);
