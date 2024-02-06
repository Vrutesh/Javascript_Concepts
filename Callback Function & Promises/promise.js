// promise concept

let promise1 = new Promise((resolve, reject)=>{
    let randomNum = Math.random();
    if(randomNum < 0.5){
        reject("Promise is rejected")
    }
    else{
        setTimeout(() => {
            console.log("Vrutesh")
            resolve("hello")
        }, 1000);
        
    }
    console.log(randomNum)
})

promise1.then((randomNumber)=>{
    console.log(randomNumber)
}).catch((err)=>{
    console.log("System Under Maintenance") 
})

// console.log(promise1)