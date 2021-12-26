// Array with quotes and authors
const quotesInfo = [
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Teddy Roosevelt"
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle"
  },
  {
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller"
  },
  {
    quote: "There is a superhero in all of us, we just need the courage to put on the cape.",
    author: "Superman"
  },
  {
    quote: "Trust yourself. You know more than you think you do.",
    author: "Dr. Benjamin Spock"
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde"
  },
  {
    quote: "Two roads diverged in a wood, and I – I took the road less traveled by.",
    author: "Robert Frost"
  },
  {
    quote: "There’s a whole world out there, right outside your window. You’d be a fool to miss it.",
    author: "Charlotte Eriksson"
  }

]

// on load, start with this function
  window.onload = init;

  function init() {
    newQuote()
  }

  function newQuote(){
    let quotesHowMany = quotesInfo.length;
    //randomize quotes
    let indexRandom = Math.floor(Math.random()*quotesHowMany);

    // quote with API format for linking
    let webQuote = quotesInfo[indexRandom].quote.replace("/ /g", "%20");
    let webAuthor = quotesInfo[indexRandom].author.replace("/ /g", "%20");

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=%22" + webQuote + "%22" + " -" + webAuthor;
    document.getElementById("tweet-quote").href = twitterLink;




    document.getElementById("text").innerText = quotesInfo[indexRandom].quote;
    document.getElementById("author").innerText = quotesInfo[indexRandom].author;
  }
