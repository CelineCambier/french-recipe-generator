function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Here will be the french recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generetor-form");
recipeFormElement.addEventListener("submit", generateRecipe);
