// assignmentOne

let numberOne = 10
let numberTwo = 20
console.log(""+numberOne + numberTwo) // Normal Concatenate => 1020
console.log(typeof(""+numberOne + numberTwo)) // Normal Concatenate => String

console.log(`${numberOne}${numberTwo}`) // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`) // Template Literals Way => String


/*
  Normal Concatenate
  20
  10
*/
console.log(numberOne + "\n" + numberTwo)
/*
  Template Literals Way
  20
  10
*/
console.log(`${numberOne}
${numberTwo}`)

// assignmentTwo
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


// assignmentThree

/* print the following without using template literals
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
* */
console.log("\`I\'m IN \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`")

// assignment Four

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_