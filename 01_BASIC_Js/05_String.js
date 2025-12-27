let name="Rajan chauhan"
const rollNumber=123

// console.log(name +" "+ rollNumber)
console.log(`My Name is ${name} and My rollNumber is ${rollNumber}`) 

const gameName="hitesh"

console.log(typeof(gameName))
console.log(gameName.length)


const gameName1= new String('rajan')
// console.log(typeof(gameName1))
// console.log(gameName1.length)
// console.log(gameName1.toUpperCase())
// console.log(gameName1.charAt(3))
// console.log(gameName1.indexOf('a'))

const newString=gameName1.substring(0,4) // (-4,6) negetive value not allowed
// console.log(newString)

// const secondString=gameName1.slice(-5,3)
// console.log(secondString)


const newStringOne="   rajan    "

console.log(newStringOne)
// console.log(newStringOne.trim())


const url="https://rajan.com/rajan%20chauhan"

console.log(url)
console.log(url.replace("%20", "-"))
console.log(url.includes('rajan')) //o/p true or false

const findstring="rahsb-shsbs=sggdhb-shdvgd+svgfd"
console.log(findstring.split('+'))


