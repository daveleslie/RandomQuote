const randomQuote = {
  data() {
    return {
      quoteArr: [],
      quote: "",
      author: "",
      tweetLink: "http://www.twitter.com/intent/tweet?text=",
    };
  },
  computed: {
    tweetQuote() {
      return `${this.quote} - ${this.author}`;
    },
  },
  methods: {
    async getQuotes() {
      try {
        let response = await fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/"
        );
        this.quoteArr = await response.json();
        let randomNumber = Math.floor(
          Math.random() * this.quoteArr.quotes.length
        );
        this.quote = this.quoteArr.quotes[randomNumber].quote;
        this.author = this.quoteArr.quotes[randomNumber].author;
      } catch (error) {
        console.log(error);
      }
    },
    newQuote() {
      let randomNumber = Math.floor(
        Math.random() * this.quoteArr.quotes.length
      );
      this.quote = this.quoteArr.quotes[randomNumber].quote;
      this.author = this.quoteArr.quotes[randomNumber].author;
    },
  },
  created() {
    this.getQuotes();
  },
};

Vue.createApp(randomQuote).mount("#app");
