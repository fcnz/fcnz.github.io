// node script, must install csv-parse locally (npm i csv-parse)

const fs = require('fs');
const csvParser = require('csv-parse/lib/sync');

const DATA = String(fs.readFileSync(`${__dirname}/raw-data.csv`));

const data = csvParser(DATA, { skip_empty_lines: true, relax_column_count: true });

const report = [
  ['district', 'year', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S']
];

data.forEach(line => {
  if (line[1].trim() !== 'Employee Count') return;

  const year = line[3].trim();
  const district = line[0].trim();

  let existingLine = report.find(r => r[0] === district && r[1] === year);

  if (!existingLine) {
    existingLine = [ district, year, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    report.push(existingLine);
  }

  const valueIndex = report[0].indexOf(line[2][0]);

  existingLine[valueIndex] = Number(line[4]);
});

console.log(report.join('\n'));
