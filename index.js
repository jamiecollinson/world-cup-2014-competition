var csv = require('ya-csv');

var reader = csv.createCsvFileReader('results.csv', { columnsFromHeader: true });

var teams = {};
reader.addListener('data', function(data) {
  teams[data.home_team] = teams[data.home_team] || {'pi_home': 1, 'pi_away': 1};
});
reader.addListener('end', function(data) {
  console.log(teams);
});
