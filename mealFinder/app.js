const searchMeal = async (e) => {
    e.preventDefault();

    const input = document.querySelector('.input')
    const title = document.querySelector('.title')
    const info = document.querySelector('.info')
    const img = document.querySelector('.img')
    const ingredientsOutput = document.querySelector('.ingredients')

    const showMealInfo = (meal) => {
        console.log(meal);

        const { strMeal, strMealThumb, strInstructions
        } = meal;

        title.textContent = strMeal;
        info.textContent = strInstructions;
        img.style.backgroundImage = `url(${strMealThumb})`
    }

    const showAlert = () => {
        alert('Meal Not Found 😰')
    }

    const fetchMealData = async (val) => {
     const res =   await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);


     const {meals} = await res.json();
     return meals;
    };

    const searchContent =  input.value.trim();

    if(searchContent) {
        const meal = await fetchMealData(searchContent)

        if(!meal) {
            showAlert()
            return;
        }

        meal.forEach(showMealInfo);

    } else {
        alert('Please Try Searching For Meal 🤞')
    }
}


const form = document.querySelector('form')
form.addEventListener('submit', searchMeal)

const magnifier = document.querySelector('.magnifier')
magnifier.addEventListener('click', searchMeal)