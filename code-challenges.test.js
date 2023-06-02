// ASSESSMENT 3: Coding Practical Questions with Jest

const { log } = require("console")

// const { tsParameterProperty, LOOP_TYPES } = require("@babel/types")
// const { log } = require("console")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe(`fib`, () => {
  it(`takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence`, () => {
    const fibLength1 = 6
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])

    const fibLength2 = 10
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
describe(`fib`, () => {
  it(`takes in a number (greater than 2)`, ()=>{

  })
})

// b) Create the function that makes the test pass.

const fib = length => {
  const fibonacci = [1, 1]
  
  for (let i = 2; i < length; i++) {
    const nextNumber = fibonacci[i - 1] + fibonacci[i - 2]
    fibonacci.push(nextNumber)
  }
  
  return fibonacci
}

console.log(fib)

// Pseudo code:
// So, we have a function called fib, which takes a parameter named length. This parameter represents the desired length of the Fibonacci sequence that we want to generate.
// Inside the function, we start by creating an array called fibonacci and initialize it with the first two numbers of the sequence, which are 1 and 1. This array will store the Fibonacci numbers as we generate them.
// Next, we set up a loop using the for statement. It starts at index 2 because the first two numbers are already in the fibonacci array.
// In each iteration of the loop, we calculate the next number in the Fibonacci sequence by adding the previous two numbers. We do this using the formula nextNumber = fibonacci[i - 1] + fibonacci[i - 2].
// Once we have the nextNumber, we add it to the fibonacci array using the push() method. This way, the array keeps growing with each new Fibonacci number we generate.
// The loop continues until the index i reaches the specified length parameter. This ensures that we generate the desired number of Fibonacci numbers.
// Finally, we return the fibonacci array, which now contains the complete Fibonacci sequence up to the specified length.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe('sortObjectValues', () => {
  it('takes in an object and returns an array of the values sorted from least to greatest', () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
function sortObjectValues(obj) {
  const values = Object.values(obj)
  return values.sort((a, b) => a - b)
}

console.log(sortObjectValues)
// Pseudo code:
// So, we have a function called sortObjectValues. This function takes an object as a parameter, and we'll call this parameter obj.
// Inside the function, we create a new variable called values. We assign it the result of calling Object.values(obj). This is a built-in JavaScript function that takes an object and returns an array containing the values of the object.
// The next step is to sort the values in ascending order. To do this, we use the sort() method on the values array. We pass a comparison function (a, b) => a - b to the sort() method.
// The comparison function (a, b) => a - b is responsible for determining the order of the elements during the sorting process. It compares two elements, a and b, and returns a negative value if a should come before b, a positive value if a should come after b, or zero if they have the same order.
// In our case, since we want to sort the values in ascending order, we subtract b from a in the comparison function (a, b) => a - b. This ensures that smaller values come before larger values.
// Then we return the sorted values array from the function.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('accuSum', () => {
  it('takes in an array and returns an array of the accumulating sum. An empty array should return an empty array', () => {
    const accountTransactions1 = [100, -17, -23, -9]
    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51])

    const accountTransactions2 = [250, -89, 100, -96]
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165])

    const accountTransactions3 = [];
    expect(accuSum(accountTransactions3)).toEqual([])
  })
})


// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// b) Create the function that makes the test pass.

function accuSum(arr) {
  let sum = 0
  return arr.map(num => {
    sum += num
    return sum
  })
}


// Pseudo code:
// First, I define a function called accuSum that takes an array as a parameter. I'll call this parameter arr.
// Inside the function, I declare a variable called sum and set it to 0. This variable will keep track of the accumulating sum.
// Next, I use the map() method on the arr array. The map() method iterates over each element of the array and returns a new array with the transformed values.
// For each element in the arr array, I define an arrow function that takes a parameter called num. This arrow function represents the transformation to be applied to each element.
// Inside the arrow function, I update the sum variable by adding the current element num to it.
// Finally, I return the updated sum after each iteration, which gives us the accumulating sum at each position in the array.
