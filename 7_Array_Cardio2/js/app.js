const people = [
    {name: 'Jake', year:1990},
    {name: 'Blake', year:1996},
    {name: 'Sirius', year:1970},
    {name: 'Hydra', year:2006}
]

const comments = [
    { text: "Love this", id: 23432 },
    { text: "Super Good", id: 25432 },
    { text: "You are the best", id: 23465 },
    { text: "Ramen is my fav food ever", id: 23354342 },
    { text: "Nice Nice Nice!", id: 2343342 },
    { text: "How amazing!", id: 2398432 }
]

//  // Practicing some and every
// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 18;
// })
// console.log({isAdult})

// const allAdults = people.every(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 18;
// })
// console.log({ allAdults })


// // Array.Prototype.find()
const comment = comments.find(comment => {
    return comment.id == 2398432
})
console.log(comment)

//  // Array.Prototype.findIndex()
const index = comments.findIndex(comment => comment.id == 23465)
console.log(index)
// comments.splice(index,1)

const newComment = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
]




