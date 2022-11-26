let showHeroesbtn = document.querySelector(".showheroes");// this links a var to a class created in html - in html this would apear as btn . shwheroes
let showheroesContainer = document.querySelector('heros-container');
showHeroesbtn.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
    showheroesContainer.classList.add('d-flex');
    showHeroesbtn.classList.add('d-none');
}

