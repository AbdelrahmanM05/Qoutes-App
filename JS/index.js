
function displayQuote() {

    var quotes = [{
        quote: `Be yourself; everyone else is already taken.`
        , author: `― Oscar Wilde`
    },
    {
        quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`
        , author: `― Martin Luther King Jr.`
    },
    {
        quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
        , author: `― Albert Einstein`
    },
    {
        quote: `You only live once, but if you do it right, once is enough.`
        , author: `― Mae West`
    },
    {
        quote: `Be the change that you wish to see in the world.`
        , author: `― Mahatma Gandhi`
    },
    {
        quote: `In three words I can sum up everything I've learned about life: it goes on.`
        , author: `― Robert Frost`
    },
    {
        quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`
        , author: `― Maya Angelou`
    },
    {
        quote: `A friend is someone who knows all about you and still loves you.`
        , author: `― Elbert Hubbard`
    },
    {
        quote: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment`
        , author: `― Ralph Waldo Emerson`
    },
    {
        quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`
        , author: `― Mahatma Gandhi`
    }];
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.getElementById("author").innerHTML = quotes[random].author;
};