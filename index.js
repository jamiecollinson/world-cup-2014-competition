var csv = require('ya-csv');

var reader = csv.createCsvFileReader('results.csv', { columnsFromHeader: true });
reader.addListener('data', function(data) {
  console.log(data);
});