Promise.resolve("執行成功").then(function (result) {
    console.log(result);
}, function (ex) {
    console.log(ex);
});
//-------------------------------
let p1 = Promise.resolve("執行成功");
p1
    .then(result => {
        console.log(result)
    })
    .catch(ex => {
        console.log(ex);
    })
    .finally(() => { });
//------------------------------
//直接讓他產生失敗
let p2 = Promise.reject(new Error("執行失敗"));

p2
    .then(result => {
        console.log(result)
    })
    .catch(ex => {
        console.log(ex);
    })
    .finally(() => { });
//------------------------------
var p1 = Promise.resolve(35);
console.log(p1);
var p2 = Promise.resolve("Success");
console.log(p2);
var p = Promise.resolve([1,2,3]);
console.log(p);
//--------------------------------
let p1 = Promise.resolve(35);

let p4 = Promise.resolve(p1);
console.log(p4);