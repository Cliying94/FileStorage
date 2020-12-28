var cars = ["bMW", "Benz", "Audi", "Lexus"];
var Prices = [280, 320, 250, 210];


//map()方法是對每一個陣列元素做運算，並將結果回傳至新陣列
var PricesWithTax = Prices.map(p => p * 1.05);
console.log(PricesWithTax);

var prices1 = [280,320,250,210];
//reduce()方法是對所有陣列元素作加總
console.log("總金額:"+
    prices1.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
        
    })
);