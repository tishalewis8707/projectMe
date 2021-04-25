const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

document.addEventListener('DOMContentLoaded', getJoke);
 
//fetch jokes from API

function getJoke(){
  fetch(' https://icanhazdadjoke.com/',{
    headers:{
      'Accept': 'application/json'
    }
  }).then(Response=> Response.json())
  .then(getJoke=> console.log(getJoke)

  )};



//async function getJoke(){
  //const jokeData = await fetch('https://official-joke-api.appspot.com/jokes/random', {
  //Headers: {
    //'Accept': 'application/json'
  //}
  //});
  //const jokeObj = await jokeData.json();
//jokeText.innerHTML = jokeObj.joke;
//}

