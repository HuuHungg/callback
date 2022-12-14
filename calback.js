Array.prototype.map2 = function (callback) {
    let output = []
    let arrLength = this.length
    for(let i = 0; i < arrLength; i++) {
       let result =  callback(this[i])
       output.push(result)
    }

    return output
}



let course = [
    'Javascript', 
    'PHP',
    'Ruby'
]


let htmls = course.map2((course)=> {
    return `<h2 ${course} ></h2>`
})

console.log(htmls.join(''))

// let courses = course.map( (course) => {
//     return `<h2> ${course}</h2>`
// })
// console.log(courses)


console.log('Huu Hung Nguyen')
