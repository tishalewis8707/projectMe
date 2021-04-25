const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('jokeText');


jokeBtn.addEventListener('click', () => {
  console.log('clicked the button');
  const url = 'https://official-joke-api.appspot.com/random_joke'
  fetch(url) 
  .then((res) => {
      return res.json();
  })
.then((data) => {
    console.log(data)
    jokeText.innerHTML = data.setup
    jokePun.innerHTML = data.punchline
  })
});
 









//const button = document.querySelector('.container button');
//const jokeText = document.querySelector('.container p');

//document.addEventListener('DOMContentLoaded', getJoke);
 
//fetch jokes from 

//function getJoke(){
  //fetch(' https://icanhazdadjoke.com/',{
   // headers:{
    //  'Accept': 'application/json'
   // }
  //}).then(Response=> Response.json())
  //.then(getJoke=> console.log(getJoke)

  //)};

//jokeText.innerHTML = getJoke;



//async function getJoke(){
  //const jokeData = await fetch('https://official-joke-api.appspot.com/jokes/random', {
  //Headers: {
    //'Accept': 'application/json'
  //}
  //});
  //const jokeObj = await jokeData.json();
//jokeText.innerHTML = jokeObj.joke;
//}

