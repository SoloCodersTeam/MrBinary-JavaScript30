dogs = [{ name: 'Snickers', age: 2}, { name: 'hugo', age: 3}]


// Break on test
function changeColor() {
    let elm = document.getElementById('color')
    elm.style.color = 'green'
    elm.style.fontSize = '20px'
}

// Regular
console.log('Hello there')
console.table({name:"name",age:100})

// Interpolated
console.log('Hello my name is %s, I would like some %s', 'MrBinary','🍟')

// styled
console.log('%c I am some styled text','font-size:30px;background-color:red;')

// warning
console.warn('Stop there!')

// Error
console.error('Things went sideways!')

// info
console.info('You are incredible!')

// testing
console.assert(1 === 2, 'You are not true')
console.assert(1 === 1, 'You are true')

const elm = document.querySelector('div')
console.assert(elm.classList.contains('hey'), 'doesn\'t exist on the classlist')

// Clearing
// console.clear()

// Viewing dom element
const elm_2323 = document.documentElement
elm_2323.addEventListener('contextmenu', (e) => console.log('context menu opened'))
console.log(elm_2323)
console.dir(elm_2323)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
        console.log(`This is ${dog.name}`)
        console.log(`He is ${dog.age} years old!`)
        console.log(`${dog.name} is ${dog.age * 7} dog years old!`)
    console.groupEnd(`${dog.name}`)
})

//  Counting
console.count('MB')
console.count('MB')
console.count('ML')
console.count('MB')
console.count('ML')
console.count('MB')

//  Timing
console.time('fetching data')
fetch('https://api.github.com/users/mrbinary')
    .then(data => data.json())
    .then(data => {
        console.log(data.login)
        console.log(data.repos_url)
        console.timeEnd('fetching data')
    })

// table again
console.table(dogs)
