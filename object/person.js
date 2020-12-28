//string效能較好
var name1 = "Kevin"; //String Literal
console.log(typeof name1);
var name2 = new String("kevin"); //object Literal
console.log(typeof name2);

//這種表示法叫做Object Literal
let person = {
    name: "kevin",
    age: 32,
    height: 175,
    weight: 64,
    bmi: function () {
        //方法有二，此為method 物件裡宣告一個方法指定為function(如果是單獨宣告為function就是function)
        //object literal語法需要用this才能存取本身屬性
        return this.weight / ((this.height / 100) ** 2);
    }
}

console.log(person);
console.log(person.bmi());
console.log("the Object is"+person);
console.log("the Object is %o" + person);

let jsonText = JSON.stringify(person);
console.log(typeof jsonText);

let p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);