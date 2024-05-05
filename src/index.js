function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e48e1aab0acf4fc215c13f02ct8bo5ab";
  let prompt = `User instructions: Generate a French recipe with ${instructionsInput.value}`;
  let context =
    "You are a very smart AI and love helping poeple. Your mission is to generate an easy French recipe written in English. The recipes needs to be provided in HTML Avoid adding ```html at the beginning of the answer. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a French recipe with ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generetor-form");
recipeFormElement.addEventListener("submit", generateRecipe);
