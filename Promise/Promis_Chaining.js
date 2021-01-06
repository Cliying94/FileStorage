let promise1 = new Promise((resolve, reject) =>{
    console.log("Promise初始化");
    resolve();
})

promise1
.then(()=>{
    console.log("這是第一個then區段");
    throw new Error("Fail");
})
.catch((ex)=>{
    // console.log("這是第一個Catch區段");
    console.log(ex);
})
.then(()=>{
    console.log("這是第二個then區段");
});