let person = {
    name:"Kevin",
    email:"kevin@gmail.com",
    phone:"0933-159224"
};
var p = new Object();
p.name = "Kevin";
p.email = "kevin";
p.phone = "0933-159224";

console.log(p);

let personArray = [["Aatrox","Aatrox Role"],
                ["email","kevin@gmail.com"],
                ["phone","0925-154888"]
];

var p1 = new Object();
p1[personArray[0][0].toString()] = personArray[0][1];
p1["firstname"] = "Aatrox";
console.log(p1);

