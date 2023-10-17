
const scoreDomElement = document.getElementById('score')
console.log(scoreDomElement)

const arrayNumberGenerator = []
const numberUser = []
let point = 0

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)}

for(let i = 0; i < 5;i++ ){
   const number =(getRandomInt(1, 100))
   arrayNumberGenerator.push(number)
}
alert(arrayNumberGenerator)

const clock = setTimeout(timer, 30000)

console.log(numberUser)

function timer() {
    for (let i = 0; i < 5; i++) {
      const numberPrompt = parseInt(prompt('Inserisci un numero'))
      numberUser.push(numberPrompt)
    }
  
    for (let i = 0; i < 5; i++) {
      if (arrayNumberGenerator.includes(numberUser[i])) {
        point += 1 
        console.log('Indovinato')
      } else {
        console.log('Non indovinato')
      }
    }
    scoreDomElement.innerHTML = point
  }

