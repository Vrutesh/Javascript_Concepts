// promise concept

let promise1 = new Promise((resolve, reject) => {
    let randomNum = Math.random()
    console.log(randomNum)
    if(randomNum < 0.5){
        reject("System under Maintenance")
    }
    else{
        setTimeout(() => {
           console.log("Resolved")
           resolve("Hello")
        }, 1000);
    }
})

let promise2 = new Promise((resolve, reject) => {
    let randomNum = Math.random()
    console.log(randomNum)
    if(randomNum < 0.5){
        reject("System under Maintenance 2")
    }
    else{
        setTimeout(() => {
           console.log("Resolved 2")
           resolve("Hello 2")
        }, 1000);
    }
})

// promise1.then((Num)=>{
//     console.log("hello")
// }).catch((err)=>{
//    console.log(err)
// })


let p3 = Promise.all([promise1, promise2])
p3.then((randomNum)=>{
    console.log(randomNum)
}).catch((err)=>{
    console.log(err)
})

// console.log(promise1)