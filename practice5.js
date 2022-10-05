var car1 = {
    speed: 350,
    brand: "honda",
    color: "yellow"
}
console.log(Object.keys(car1))
console.log(Object.values(car1))
console.log(Object.entries(car1))


var fruitList = ["mango", "apple", "banana", "orange", "cucumber"]
for(fruitLists of fruitList){
    console.log(fruitList.indexOf(fruitLists), fruitLists)
}

var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}
for(var key of Object.keys(clothingItem)){
    console.log(key, ", The value is: ", clothingItem[key])
}

color = ["red", "blue", "green", "white", "black"]
for (colors of color){
    console.log(color.indexOf(colors), "index position:",colors)
}