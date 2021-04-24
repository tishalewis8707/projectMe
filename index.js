const getJokes = () => {
  return fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
}




const createJokeDiv = (joke) => { 
  const jokeContainer = document.createElement('div')
  const jokeContainerTitle = document.createElement('h2')
  const setup = document.createElement('p')
  const punchline = document.createElement('p')
  const jokeRating = document.createElement('p')
  const ratingInput = document.createElement('input')
  const ratingBtn = document.createElement('button')