/** 1st assignment
 * Code one will not work as it precedes the element without onload.
 * Code two will work as it is using onload which will wait for element load.
 * Code three will also work normally as it is placed after the element.
 * **/



// Assignment 2

let div1 = document.createElement('div')
let text = document.createTextNode("ELZERO")

div1.appendChild(text)

let style = document.createElement('style')
style.innerHTML = 'div {color: blue;\n' +
    'font-size: 80px;\n' +
    'font-weight: bold;\n' +
    'text-align: center;\n' +
    'font-family: Arial}'

document.head.append(style)
document.body.append(div1)


// Assignment 3

console.log("%cELZERO %cWEB %cSchool","color:green;font-size:45px;font-weight:bold;","color:Blue;font-size:45px;font-weight:bold;","color:yellow;font-size:45px;font-weight:bold;background-color:blue;")

// Assignment 4

console.group("Group1")
console.log("Message One")
console.log("Message two")
console.group("Child Group")
console.log("Message One")
console.log("Message two")
console.group("Grand Child Group")
console.log("Message One")
console.log("Message two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Message One")
console.log("Message two")


// Assignment 5

console.table(["ELzero","Ahmed","Sameh","Gamal","Aya"])


// Assignment 6

//console.log("Iam In Console");
//document.write("Iam In Page");


/** console.log("Iam In Console");
document.write("Iam In Page"); **/