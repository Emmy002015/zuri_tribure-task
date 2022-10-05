class Add {
    constructor(num1, num2, num3, string1, boolean1){
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.boolean1 = boolean1
    }
    calculate(){
        if (this.boolean1) {
            console.log (this.string1, this.num1 + this.num2 + this.num3)
            return
        } else {
            console.log ("seems you entered a wrong boolen type")
        }
    }
} 
var test1 = new Add (5, 6, 2, "result", true)
test1.calculate()
// var test2 = new Add ()
// test2.calculate();