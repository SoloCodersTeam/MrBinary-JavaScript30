// reference vs copy

let age = 10
let age2 = age

console.log(age,age2)

age = 20

console.log(age,age2)

let name = 'Binary'
let name2 = name

console.log(name,name2)

name = 'Mr'

console.log(name, name2)

// In case of array
const names = ['Mr', 'Binary', 'Hello', 'World']
const names2 = names

console.log(names,`\n`, names2)

names2[2] = 'Hi'

console.log(names, `\n`, names2)

// So how to make a copy (Shallow copies)
const names3 = [].concat(names)
const names4 = names.slice()
const names5 = [...names]
const names6 = Array.from(names)

console.log(names3, `\n`, names4, `\n`, names5, `\n`, names6)

names4[2] = 'Hello'

console.log(names3, `\n`, names4, `\n`, names5, `\n`, names6)


// Shallow vs Deep copy
let n = [1, 3, 5, [34]]
let n2 = n
console.log(n === n2) // true because of shallow copy

let n3 = JSON.parse(JSON.stringify(n))
console.log(n === n3) // false because of deep copy


// in case of objects
const person = {
    name : 'Binary',
    age : 10,
    number : 100
}

const person2 = person

console.log(person, `\n`, person2)

const person3 = Object.assign({}, person, {number : 200})

console.log(person, `\n`, person2, `\n`, person3)

// Shallow vs Deep copy
let m = {name: 'Mr', addresses : { State : 'Iowa', street : '12th Avenue'}}
let m2 = m
console.log(m === m2) // true because of shallow copy

let m3 = JSON.parse(JSON.stringify(m))
console.log(m === m3) // false because of deep copy










