const fs = require('fs');

function first() {
    fs.readFile('./frequency.txt', (err, data) => {
        const directions = data.toString();
        let frequencies = directions.split('\r\n');
        let newFrequencies = [];
        
        for (let i = 0; i < frequencies.length; i++) {
            newFrequencies.push(parseInt(frequencies[i], 10));

        }

        let frequency = 0;

        for (let i = 0; i < newFrequencies.length; i++) {
            frequency += newFrequencies[i];
    } 
    console.log(frequency);
        
    })
}

first();