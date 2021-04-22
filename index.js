const getJokes = () => {
  return fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
}

let cardSection;
let cardContainer;
let filter;
let gigglesData;

document.addEventListener("DOMContentLoaded", 
function () {
    cardSection = document.getElementsByClassName("card-section");
    listContainer = document.getElementsByClassName("list-container");
    filter = document.getElementById(" last joke id + 1,");
    filter.addEventListener("change", function (event) {
      const option = event.target.value;
      selectGiggles(option);
    });

    loadGiggles("general");
    loadGigglesList();
  });
