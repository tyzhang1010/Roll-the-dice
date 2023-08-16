let heading = document.querySelector(".container h1");
//Selec a random number 
function randomNum () {
    return Math.floor(Math.random() * 6) + 1; 
}
//pick a random pic of the dice1 
let randomNumber1 = randomNum();
let path1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src", path1);

//pick a random pic for dice2
let randomNumber2 = randomNum();
let path2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", path2);

//compare both dice
if(randomNumber1 === randomNumber2) {
    console.log("draw");
    //if both numbers on the dice is the same, then change the heading to draw
    heading.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    console.log("player 1 win");
    heading.innerHTML = "Player 1 win!";
} else {
    console.log("player 2 win");
    heading.innerHTML = "Player 2 win!";
}