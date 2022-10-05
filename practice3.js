//OOP javaScript programming
var purchase1 = {
    shoe: 5200,
    tax: 390,
    totalPurchase:function(){
        var calculate = this.shoe + this.tax;
        console.log("The Total Purchase made is: N"+ calculate)
    }
}
// console.log (purchase1.totalPurchase)
purchase1.totalPurchase();
console.log(purchase1.shoe)


var purchase2 = {
    shoe: 7800,
    tax: 390,
    totalPurchase: function(){
        var calculate = this.shoe + this.tax
        console.log("The Total Purchase made is: N"+ calculate)
    }
}
purchase2.totalPurchase();
console.log(purchase2.shoe)