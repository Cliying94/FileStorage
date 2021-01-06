const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("成功的話，請呼叫resolve方法!");
        // reject("失敗的話，請呼叫resolve方法!");


    }, 3000);

});

console.log(promise1);
promise1
    //promise基礎語法一定有一個then，fetch()一般是帶兩個
    .then(result => {
        console.log("成功的回傳值" + result);
        console.log(promise1 instanceof Promise);
    })
    .catch(es => {
        console.log("失敗原因:" + ex);
        console.log(promise1);
    })
    .finally(() => {
        console.log("Promise finally完成");
        console.log(promise1);
    });

console.log(promise1);
