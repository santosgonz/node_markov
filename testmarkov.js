const fs = require('fs');
const MarkovMachine = require ('./markov.js');

fs.readFile('./eggs.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return;
    }
    const machine = new MarkovMachine(data)
    // console.log(machine.chains)
    // console.log(machine.makeText)
})

// let machine = new MarkovMachine("the cat in the hat");
// machine.makeChains();
// console.log(machine.chains);

// console.log(machine.makeText())