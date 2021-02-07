// cooking master
document.getElementById('searchBtn').addEventListener('click', function () {
    const inputMealName = document.getElementById('mealName').value;
    if (inputMealName != '') {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMealName}`;
        fetch(url)
            .then(response => response.json())
            .then(data => getMeals(data.meals))
            .catch(function () {
                alert(`Sorry didn't find any meal! please try another meal name`);
            });
        const getMeals = meals => {
            meals.forEach(meals => {
                const mealContainer = document.getElementById('meal-container');
                const div = document.createElement('div');
                div.className = 'single-meal';
                const mealInfo = `
                <img src="${meals.strMealThumb}">
                <h3>${meals.strMeal}</h3>
            `;
                div.innerHTML = mealInfo;
                mealContainer.appendChild(div);
                document.getElementById('mealName').value = '';

            });
        }
    } else {
        alert('Please Enter meal name');
    }




})



