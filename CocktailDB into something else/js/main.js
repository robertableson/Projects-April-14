//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${drink}'


document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)

        let drinks = data.drinks

        let drink2 = drinks[0]

        //drinks.forEach( drink => {
            document.querySelector('h2').innerText = drink2.strDrink
            document.querySelector('img').src = drink2.strDrinkThumb
            document.querySelector('h3').innerText = drink2.strInstructions
        //} )
    /*
            document.querySelector('h2').innerText = data
            document.querySelector('h2')
            document.querySelector('h2')


    /*
            let drinks = data

            data.forEach( () => {

            } )*/


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}