/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = {};
    this.makeChains();
    //added this.chains
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // let chains = {};
    for (let i = 0; i < this.words.length; i++) {
      // console.log(this.words[i])
      if (!this.chains[this.words[i]]) {
        this.chains[this.words[i]] = [];
      }
      let nextWord = this.words[i + 1] || null;
      this.chains[this.words[i]].push(nextWord)

    }
    
  }
  


  /** return random text from chains */

  makeText(maxWords = 50) {
    let keys = Object.keys(this.chains);
    let currentWord = keys[Math.floor(Math.random() * keys.length)];
    let output = [currentWord];

    for(let i = 0; i < maxWords; i++){
      let nextWordsArray = this.chains[currentWord]
      console.log(nextWordsArray)
      let nextWord = nextWordsArray[Math.floor(Math.random() * nextWordsArray.length)]
      console.log(nextWord)
      if (nextWord === null) break;
      output.push(nextWord);
      currentWord = nextWord
    }
    return output.join(' ')
    // TODO
  }
}


module.exports = MarkovMachine;