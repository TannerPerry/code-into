const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("Do you like pumpkin pie?", function(answer) {
      if (answer == 'yes'){
          console.log("you are a good person")
      } else {
          console.log("you are living a sad life")
      }
    console.log(reader.question);
  });

const name = "Tanner"
let age = 20


const isCool = true


let x = 4

let y = 5

let z = 39 + 59

let sum = x + y + z 


console.log(sum)