let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const choiceRock_div = document.getElementById("rock")
const choicePaper_div = document.getElementById("paper")
const choiceScissors_div = document.getElementById("scissors")

function randomChoice(){
    const value = Math.random() * 3 + 1
    return Math.floor(value)
}

function clickReset() {
    userScore = computerScore = 0
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
}

function clickRock() {
    const random1 = randomChoice()
    if (random1 == 1){
        choiceRock_div.style.border = "6px solid gray";
        setTimeout(function() {choiceRock_div.style.border = "6px solid white"}, 400)
    } else if (random1 == 2) {
        computerScore++
        computerScore_span.innerHTML = computerScore
        choiceRock_div.style.border = "6px solid red";
        setTimeout(function() {choiceRock_div.style.border = "6px solid white"}, 400)
    } else {
        userScore++
        userScore_span.innerHTML = userScore
        choiceRock_div.style.border = "6px solid green";
        setTimeout(function() {choiceRock_div.style.border = "6px solid white"}, 400)
    }
}

function clickPaper() {
    const random2 = randomChoice()
    if (random2 == 1){
        choicePaper_div.style.border = "6px solid gray";
        setTimeout(function() {choicePaper_div.style.border = "6px solid white"}, 400)
    } else if (random2 == 2) {
        computerScore++
        computerScore_span.innerHTML = computerScore
        choicePaper_div.style.border = "6px solid red";
        setTimeout(function() {choicePaper_div.style.border = "6px solid white"}, 400)
    } else {
        userScore++
        userScore_span.innerHTML = userScore
        choicePaper_div.style.border = "6px solid green";
        setTimeout(function() {choicePaper_div.style.border = "6px solid white"}, 400)
    }
}

function clickScissors() {
    const random3 = randomChoice()
    if (random3 == 1){
        choiceScissors_div.style.border = "6px solid gray";
        setTimeout(function() {choiceScissors_div.style.border = "6px solid white"}, 400)
    } else if (random3 == 2) {
        computerScore++
        computerScore_span.innerHTML = computerScore
        choiceScissors_div.style.border = "6px solid red";
        setTimeout(function() {choiceScissors_div.style.border = "6px solid white"}, 400)
    } else {
        userScore++
        userScore_span.innerHTML = userScore
        choiceScissors_div.style.border = "6px solid green";
        setTimeout(function() {choiceScissors_div.style.border = "6px solid white"}, 400)
    }
}