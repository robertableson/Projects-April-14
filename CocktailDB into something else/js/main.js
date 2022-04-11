//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${drink}'


document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    const htmlDrinkListContainer = document.querySelector('#drinks-list')

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            htmlDrinkListContainer.innerHTML = ''

            let drinks = data.drinks

            drinks.forEach( drink => {
                htmlDrinkListContainer.insertAdjacentHTML('beforeend', `<div class="single-drink"><h2>${drink.strDrink}</h2>`)
                htmlDrinkListContainer.insertAdjacentHTML('beforeend', `<img src="${drink.strDrinkThumb}"/>`)
                htmlDrinkListContainer.insertAdjacentHTML('beforeend', `<p>${drink.strInstructions}</p></div>`)    
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}