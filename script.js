let ingredientList = [];

function captureIngredients() {
    ingredientList = [];

    const ingredientInputs = document.getElementsByClassName("ingredient-input");
    for (let i = 0; i < ingredientInputs.length; i++) {
        const ingredient = ingredientInputs[i].value.trim();
        if (ingredient) {
            ingredientList.push(ingredient);
        }
    }
}

document.getElementById("recipePromptBuilderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    captureIngredients();

    const ingredients = ingredientList.join(", ");
    const complexity = document.getElementById("complexity").value;
    const time = document.getElementById("time").value;
    const mealType = document.getElementById("mealType").value;
    const kitchen = document.getElementById("kitchen").value;
    const specialDiet = document.getElementById("special-diet").value;
    const occasion = document.getElementById("occasion").value;

    let generatedPrompt = "Let's create a recipe using the following ingredients: ";
    if (ingredients) {
        generatedPrompt += ingredients + ". ";
    }
    if (complexity) {
        generatedPrompt += "The complexity should be " + complexity + ". ";
    }
    if (time) {
        generatedPrompt += "It should take approximately " + time + " hours to prepare. ";
    }
    if (mealType) {
        generatedPrompt += "The type of meal should be " + mealType + ". ";
    }
    if (kitchen) {
        generatedPrompt += "We'll be cooking in a " + kitchen + " kitchen. ";
    }
    if (specialDiet) {
        generatedPrompt += "The recipe should be suitable for a " + specialDiet + " diet. ";
    }
    if (occasion) {
        generatedPrompt += "It's perfect for " + occasion + ". ";
    }

    document.getElementById("generatedPrompt").textContent = generatedPrompt;
});

function copyPrompt() {
    const generatedPrompt = document.getElementById("generatedPrompt");
    const promptText = generatedPrompt.textContent;

    const tempInput = document.createElement("textarea");
    tempInput.value = promptText;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-success");
    alertMessage.textContent = "Prompt copied to clipboard!";
    document.body.appendChild(alertMessage);

    setTimeout(() => {
        alertMessage.remove();
    }, 1000);
}
