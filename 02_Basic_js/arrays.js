// array

const arr1=[12,4,6,8 ]
const myarr=["rajan","rahul"]
const newarr=new Array(1,4,"rajan","transport")

// console.log(arr1)
// console.log(myarr)
// console.log(newarr)

// console.log(myarr.push("rajaah"))
// console.log(myarr.push("rajaah"))
// myarr.pop()


// myarr.unshift(6) // add element at the starting of the array
// myarr.shift() // revome element at the starting of the array
// console.log(myarr) 

// console.log(myarr.includes("rajan")) //if value exits they give o/p true
// console.log(myarr.includes("ghfghf")) //if value does not exits they give o/p false

// console.log(myarr.indexOf("rajan"))    //if value exits they give o/p index of that element
// console.log(myarr.indexOf("rajanx"))    //if value does not exits they give o/p -1


const newworld=myarr.join() // join array ko string form m convert kr deta hai

// console.log(newworld)
// console.log(myarr)


//slice/splice

const mna=[0,1,2,3,4,5,6,7]

// console.log("A",mna)
// console.log(mna.slice(1,3)) //slice m last range include nhi hoti slice(1,3)   imp aur slice original array m change nhi karta
// console.log(mna)

// console.log("B",mna)
// console.log(mna.splice(1,3)) //splice m last range include  hoti hai  splice(1,3)   imp aur splice original array m change kr deta hai
// console.log(mna)

// ******************** Array    ************************************

const marvel_heros=["ironMan","thor","falcon","hulk"]
const dc_heros=["superMan","batMan","flash"]

marvel_heros.push(dc_heros) // o/p ["ironMan","thor","falcon","hulk",["superMan","batMan","flash"]] //change orignal array
 
// console.log(marvel_heros)

const allHeros=marvel_heros.concat(dc_heros) // o/p ["ironMan","thor","falcon","hulk","superMan","batMan","flash"]  // it not change orignal array
// console.log(allHeros)  

const all_new_heros=[...marvel_heros,...dc_heros] // o/p ["ironMan","thor","falcon","hulk","superMan","batMan","flash"]
// console.log(all_new_heros)


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(2) // o/p [1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5  ]
// console.log(real_another_array)


// console.log(Array.isArray("hitesh")) // o/p false 
// console.log(Array.from("hitesh"))  // o/p [ 'h', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"rajan"})) // interesting o/p is empty array [] 


let score1=100
let score2=10
let score3=10009

console.log(Array.of(score1,score2,score3)) // o/p [ 100, 10, 10009 ]

