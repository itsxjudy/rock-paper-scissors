const buttonRock = document.querySelector("#Rock")
const buttonPaper = document.querySelector("#Paper")
const buttonScissors = document.querySelector("#Scissors")
const container = document.querySelector('#container')

const options = ["Rock", "Paper", "Scissors"]
let playerResults = []
let cpuResults = []
let gameResults = []
let playerWins = 0
let cpuWins = 0

function cpuSelection() {    
    const cpuResult = document.querySelector(".cpu-result")
    const result = options[Math.floor(Math.random() * 3)]
    cpuResults.push(result)
    cpuResult.textContent = cpuResults.join("").replaceAll("Rock", "🪨").replaceAll("Paper", "🧻").replaceAll("Scissors", "✂️");
    return result
}

const rockSelection = () => {
    const playerResult = document.querySelector(".player-result")
    playerResults.push(options[0])
    playerResult.textContent = playerResults.join("").replaceAll("Rock", "🪨").replaceAll("Paper", "🧻").replaceAll("Scissors", "✂️");
}
const paperSelection = () => {
    const playerResult = document.querySelector(".player-result")
    playerResults.push(options[1])
    playerResult.textContent = playerResults.join("").replaceAll("Rock", "🪨").replaceAll("Paper", "🧻").replaceAll("Scissors", "✂️");
}
const scissorsSelection = () => {
    const playerResult = document.querySelector(".player-result")
    playerResults.push(options[2])
    playerResult.textContent = playerResults.join("").replaceAll("Rock", "🪨").replaceAll("Paper", "🧻").replaceAll("Scissors", "✂️");
}

function compare() {
    const lastPlayerChoice = playerResults[playerResults.length-1]
    const lastCpuChoice = cpuResults[cpuResults.length-1]
    const result = document.querySelector(".result")

    if (lastPlayerChoice == lastCpuChoice) {
        gameResults.push("Draw")
        result.textContent = gameResults.join("").replaceAll("Draw", "🟡").replaceAll("Win", "🟢").replaceAll("Lose", "🔴");
    }
    else if ((lastPlayerChoice == options[0] && lastCpuChoice == options[2]) || (lastPlayerChoice == options[1] && lastCpuChoice == options[0]) || (lastPlayerChoice == options[2] && lastCpuChoice == options[1])) {
        gameResults.push("Win")
        playerWins++
        result.textContent = gameResults.join("").replaceAll("Draw", "🟡").replaceAll("Win", "🟢").replaceAll("Lose", "🔴");
        console.log(playerWins)        
    } 
    else {
        gameResults.push("Lose")
        cpuWins++
        result.textContent = gameResults.join("").replaceAll("Draw", "🟡").replaceAll("Win", "🟢").replaceAll("Lose", "🔴");
    }

    if (playerWins === 5) {
        const winner = document.createElement('div');
        winner.classList.add("winner-result","notification", "is-success", "title", "is-5", "has-text-centered");
        winner.textContent = "You are the winner! 👏🏻".toUpperCase();
        container.appendChild(winner)
    }

    else if (cpuWins === 5) {
        const loser = document.createElement('div');
        loser.classList.add("loser-result","notification", "is-danger","title", "is-5", "has-text-centered");
        loser.textContent = "You are the loser! 😭".toUpperCase();
        container.appendChild(loser)    }
    
}



buttonRock.addEventListener("click", () => {
    if (!(playerWins >= 5 || cpuWins >= 5)) {
        cpuSelection(); rockSelection(); compare()
    }
})
buttonPaper.addEventListener("click", () => {
    if (!(playerWins >= 5 || cpuWins >= 5)) {
        cpuSelection(); paperSelection(); compare()
    }
})
buttonScissors.addEventListener("click", () => {
    if (!(playerWins >= 5 || cpuWins >= 5)) {
        cpuSelection(); scissorsSelection(); compare()
    }
})

