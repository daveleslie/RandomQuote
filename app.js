const randomQuote = {
  data() {
    return {
      quotes: Seed.quotes,
      test: "some text"
    }
  }

}

Vue.createApp(randomQuote).mount('#app') 