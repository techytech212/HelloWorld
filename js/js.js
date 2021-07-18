

// document.getElementById('genQuote').addEventListener('click', fetchquotes);
    
// function fetchquotes(){

//             $.getJSON('https://api.quotable.io/random', function (data) {
//               console.log(data);

//               var quotes = data.content;
              
//               var author = data.author;

//               $('#quotes').append(quotes);
              
//               $('#author').append(author);

//             })
//           }

  const anime = document.querySelector("#anime");

  const quote = document.querySelector("#quote");

  const author = document.querySelector("#author");

  const btn = document.querySelector("#btn");

  btn.addEventListener("click", genQuote);

  function genQuote(){

    fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    // .then(data => console.log(data))
    // .then(data => console.log(data))
    .then(data => { 

      anime.innerHTML = `anime: &nbsp"${data.anime}"`;
      
      quote.innerHTML = `"${data.quote}"`;

      author.innerHTML = `"${data.character}"`;

      
  })
  }