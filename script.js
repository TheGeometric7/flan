document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const html = document.documentElement;
    
    let currentTheme = localStorage.getItem("theme") || "light";
    let currentLanguage = localStorage.getItem("language") || "es";
    
    const translations = {
        en: {
            title: "Classic Flan",
            prepTime: "Prep Time",
            cookTime: "Cook Time",
            servings: "Servings",
            difficulty: "Difficulty",
            ingredients: "Ingredients",
            tools: "Required Tools",
            instructions: "Instructions",
            footer: "2025 Flan Recipe",
            ingredientsList: [
                "1 cup white sugar",
                "3 large eggs",
                "14oz can sweetened condensed milk",
                "12oz can evaporated milk",
                "1 tbsp vanilla extract"
            ],
            toolsList: [
                "9-inch round glass baking dish",
                "Medium saucepan",
                "Large mixing bowl",
                "Whisk or electric mixer",
                "Deep roasting pan",
                "Wire rack"
            ],
            instructionsList: [
                "Preheat the oven to 350°F (175°C).",  
                "Melt the sugar in a saucepan over medium-low heat until liquid and golden. Carefully pour the hot caramel into a 9-inch round glass dish, swirl to coat the bottom, and set aside.",  
                "Beat the eggs in a large bowl. Add the condensed milk, evaporated milk, and vanilla; mix well until smooth. Pour the mixture over the caramel in the dish.",  
                "Place it in a deep baking tray and add hot water until it covers 1 inch of the dish.",  
                "Bake for 1 hour (check at 55 minutes). Do not rush! Remember the flan will continue to set as it cools. Remove from the oven and let cool to room temperature. Cover with plastic wrap and refrigerate for at least 3 hours.",  
                "To serve, unmold: Run a knife around the edges, invert the flan onto a plate, and let it release gently."  
            ]
        },
        es: {
            title: "Flan Clásico",
            prepTime: "Tiempo de Preparación",
            cookTime: "Tiempo de Cocción",
            servings: "Porciones",
            difficulty: "Dificultad",
            ingredients: "Ingredientes",
            tools: "Utensilios Necesarios",
            instructions: "Instrucciones",
            footer: "2025 Receta de Flan",
            ingredientsList: [
                "1 taza de azúcar blanca",
                "3 huevos grandes",
                "1 lata (14 oz) de leche condensada azucarada",
                "1 lata (12 oz) de leche evaporada",
                "1 cucharada de extracto de vainilla"
            ],
            toolsList: [
                "Molde redondo de vidrio de 9 pulgadas",
                "Cacerola mediana",
                "Tazón grande para mezclar",
                "Batidor o batidora eléctrica",
                "Bandeja para hornear honda",
                "Rejilla para enfriar"
            ],
            instructionsList: [
                "Precaliente el horno a 350°F (175°C).",  
                "Derrita el azúcar en una cacerola a fuego medio-bajo hasta que quede líquida y dorada. Vierta con cuidado el caramelo caliente en un molde de vidrio redondo de 9 pulgadas, gírelo para cubrir el fondo y reservelo.",  
                "Bata los huevos en un tazón grande. Incorpore la leche condensada, la leche evaporada y la vainilla; mezcle bien hasta que todo esté homogéneo. Vierta la mezcla sobre el caramelo en el molde.",  
                "Coloquelo en una bandeja para hornear honda y agregue agua caliente hasta cubrir 1 pulgada del molde.",  
                "Horneelo por 1 hora (revíselo a los 55 minutos). ¡No se apresure! Recuerde que el flan seguirá cuajando al enfriarse. Sáquelo del horno y déjelo enfriar a temperatura ambiente. Cúbralo con plástico y refrigérelo por al menos 3 horas.",  
                "Para servir, desmoldelo: Pase un cuchillo por los bordes, invierta el flan sobre un plato y déjelo caer suavemente."  
            ]
        }
    };
    
    const applyTheme = () => {
        html.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        
        const themeIcon = themeToggle.querySelector("svg");
        if (currentTheme === "dark") {
            themeIcon.style.transform = "rotate(180deg)";
        } else {
            themeIcon.style.transform = "rotate(0deg)";
        }
    };
    
    const applyLanguage = () => {
        const lang = translations[currentLanguage];
        document.getElementById("recipe-title").textContent = lang.title;
        document.getElementById("prep-time").textContent = lang.prepTime;
        document.getElementById("cook-time").textContent = lang.cookTime;
        document.getElementById("servings").textContent = lang.servings;
        document.querySelector(".detail:last-child h3").textContent = lang.difficulty;
        document.getElementById("ingredients-title").textContent = lang.ingredients;
        document.getElementById("tools-title").textContent = lang.tools;
        document.getElementById("instructions-title").textContent = lang.instructions;
        document.getElementById("footer-text").textContent = lang.footer;
        
        const ingredientsList = document.getElementById("ingredients-list");
        ingredientsList.innerHTML = lang.ingredientsList.map(item => `<li>${item}</li>`).join("");
        
        const toolsList = document.getElementById("tools-list");
        toolsList.innerHTML = lang.toolsList.map(item => `<li>${item}</li>`).join("");
        
        const instructionsList = document.getElementById("instructions-list");
        const instructionItems = document.querySelectorAll("#instructions-list li");
        
        lang.instructionsList.forEach((item, i) => {
            if (instructionItems[i]) {
                instructionItems[i].querySelector("p").textContent = item;
            }
        });
        
        languageToggle.querySelector("span").textContent = currentLanguage === "es" ? "ES/EN" : "EN/ES";
        localStorage.setItem("language", currentLanguage);
    };
    
    themeToggle.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme();
    });
    
    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        applyLanguage();
    });
    
    applyTheme();
    applyLanguage();
});