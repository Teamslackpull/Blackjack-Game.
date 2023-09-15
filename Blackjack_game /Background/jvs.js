
let player = {
    chips: 200,
    name: "user "
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *13 +1)
    if(randomNumber > 10) {
        return 10
    }else if(randomNumber === 1 ){
        return 11
    } else{
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame(){
    cardsEL.textContent = "cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + " "
    }

    sumEL.textContent = "sum: " + sum
    if(sum <=20){
        message = " Do you want to draw a new card ?"
    } else if( sum === 21){
        message = " You've got Blackjack!"
        hasBlackjack = true
    }else{
        message = "your ve out of the game"
        isAlive = false
    }
        messageEL.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}