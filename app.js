const searchFoods = () => {
    const searchText = document.getElementById('foods').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
}

const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods-main');
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        const foodInfo =`
            <img src="${food.strMealThumb}"/>
            <h3 class="food-name">${food.strMeal}</h3>
            <p>${food.strArea}</p>
            <button onclick="displayFoodDetail('${food.strMeal}')">Details</button>
            `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
        console.log(food);
    });
}

const displayFoodDetail = ingredient => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>  renderFoodInfo(data));
}

const renderFoodInfo = food => {
    console.log(food);
    const foodDiv = document.getElementById('foodDetail');
    foodDiv.innerHTML = `
        <h3>${food.strMeal}</h3>
        <p>${food.strArea}</p>
        <img src="${food.strMeasure5}">
    `
}
