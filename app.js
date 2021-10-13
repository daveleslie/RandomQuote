// const {quotes} = require("./quotes.js")

const randomQuote = {
  data() {
    return {
      quotes,
      displayedQuote: quotes[0],
      test: 'test',
      tweetLink: "http://www.twitter.com/intent/tweet?text="+this.displayedQuote.quote
    }
  },
  methods: {
    newQuote() {
      let randomNumber = Math.floor(Math.random() * quotes.length)
      this.displayedQuote = quotes[randomNumber]
    }
  }
}

Vue.createApp(randomQuote).mount('#app') 