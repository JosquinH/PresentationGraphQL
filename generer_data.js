const fs = require('fs');
const filename = "paris-restaurant.csv"
const input = fs.readFileSync(filename, 'utf8').split('\n')

const headers = input.shift().split(',')

const data = []

for (const musee of input) {
  d = {}
  const line = musee.split(',')
  for (let i = 0; i < headers.length; ++i) {
    d[headers[i]] = line[i]
  }
  data.push(d)
}

fs.writeFileSync('Restaurant.json',JSON.stringify(data))