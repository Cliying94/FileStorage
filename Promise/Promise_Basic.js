const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("成功的話，請呼叫resolve方法!");
        // reject("失敗的話，請呼叫resolve方法!");


    }, 3000);

});


promise1
    //promise基礎語法一定有一個then，fetch()一般是帶兩個
    .then(result => {
        console.log("成功的回傳值" + result);
    })
    .catch(es => {
        console.log("失敗原因:" + ex);
    })
    .finally(() => {
        console.log("Promise finally完成");
    });

//---------------------
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise解析成功");
        // reject("失敗的話，請呼叫resolve方法!");
    }, 3000);

});


promise2
    //promise基礎語法一定有一個then，fetch()一般是帶兩個
    .then(result => {
        console.log("成功的回傳值" + result);
    })
    .catch(es => {
        console.log("失敗原因:" + ex);
    })
    .finally(() => {
        console.log("Promise finally完成");
    });
//---------------------
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("成功");
        reject("電腦出錯");
    }, 3000);

});


promise3.then(function (result) {
    console.log("成功的回傳值" + result);
}, function (ex) {
    console.log("失敗原因" + ex);

});

console.log(promise3);
