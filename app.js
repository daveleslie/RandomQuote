// const {quotes} = require("./quotes.js")
import { quotes } from "./quotes.js"

const randomQuote = {
  data() {
    return {
      quotes,
      displayedQuote: quotes[0],
      test: 'test',
      tweetLink: 'http://www.twitter.com/intent/tweet?text='
    }
  },
  computed: {
    tweetQuote() {
      return `${this.displayedQuote.quote} - ${this.displayedQuote.author}`
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