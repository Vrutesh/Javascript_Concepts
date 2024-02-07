let prom1 = prompt("Enter value1")
let prom2 = prompt("Enter value2")

if(isNaN(prom1) || isNaN(prom2)){
    throw SyntaxError("Please enter number")
}

let sum = parseInt(prom1) + parseInt(prom2);

function main(){
    try {
        console.log("total is", sum)
        return true    
    } catch (error) {
        console.log("There is error")
        return false
    }
    finally{
        console.log("files are getting closed")
    }

}

let c = main()