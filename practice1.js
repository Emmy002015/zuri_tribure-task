function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal (dog);
meal (dog);

var colors = ["red", "blue", "white", "orange"]
colors.forEach(function(color, index){
    console.log(index, ":", color)
})

var grades = [45, 76, 53, 67, 70]
var gradeCondition = grades.filter(function(num){
    return  num >50 && num <= 70
    // console.log(num > 50)
})
console.log(gradeCondition)

var score = [45, 76, 53, 67, 70]
score.map(function(num){
    console.log(num/10)
})


const nums = [0,10,20,30,40,50];
filteredNum = nums.filter( function(num) {
    return num > 20;
})
console.log(filteredNum)