// singleton   //singleton constructor se banta hai //example Object.create

//object literals
 
const mySym=Symbol("key1")


const details={
    name:"Rajan",
    age:22,
    "full name":"Rajan chauhan",
    [mySym]:"mykey1",
    gender:"male",
    gmail:"rajan@google.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
}


// console.log(details)
// console.log(details.age)
// console.log(details["age"])
// console.log(details["full name"])
// console.log(typeof details[mySym])

// console.log(details.gmail="raj@google.com")
// console.log(details)
// Object.freeze(details)

// console.log(details.gmail="radssj@google.com")
// console.log(details)

details.greeting=function(){
 console.log("good morning sir!")
}

details.greetingTwo=function(){
 console.log(`good morning ${this.name} sir!`)
}

//  console.log(details.greeting)
 console.log(details.greeting())
 console.log(details.greetingTwo())
