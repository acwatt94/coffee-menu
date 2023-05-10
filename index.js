//link coffeeMenu
const coffeeMenu = require("./coffee_data.js")

//Prompt 2: print array of drink names
const drinkNames = coffeeMenu.map(coffeeMenu => coffeeMenu.name)
console.log(drinkNames)
//Prompt 3: print array of drink names at price <=5 uaing filter
const cheapDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5)
const cheap = cheapDrinks.map(cheapDrinks => cheapDrinks.name)
console.log(cheap)
//Prompt 4: print array of drink names that have even number price
const evenDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 == 0)
const even = evenDrinks.map(evenDrinks => evenDrinks.name)
console.log(even)
//Prompt 5: print the total sum of all prices using reduce
const sum = coffeeMenu.reduce((total, object ) => {
    return total + object.price;
}, 0)
console.log(sum)
//Prompt 6: print array of seasonal drinks using filter
const seasonalDrinks = coffeeMenu.filter(coffeeMenu => coffeeMenu.seasonal == true)
const seasonal = seasonalDrinks.map(seasonalDrinks => seasonalDrinks.name)
console.log(seasonal)
//Prompt 7: print seasonal drinks followed by "with imported beans" using forEach
seasonalDrinks.forEach(seasonalDrinks => console.log(seasonalDrinks.name + " with imported beans"))

//NOTES
//forEach(element => console.log(element)) for each element do => to it
//sort()
//map(element => thing done) generate new array on each input array element
//reduce((accumulator, currentValue) => {accumulator + currentValue}; initialValue)
//filter(element => condition) copys part of an array an returns elements that meet condition