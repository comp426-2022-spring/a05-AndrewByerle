// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button


const coin = document.getElementById("coin")
// Add event listener for coin button
coin.addEventListener("click", flipCoin)
function flipCoin() {
    // document.getElementById("quarter").setAttribute("style", "display: true");

    fetch('http://localhost:5555/app/flip/', { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            document.getElementById("result").innerHTML = result.flip;
            document.getElementById("quarter").setAttribute("src", "./assets/img/" + result.flip + ".png");
            // coin.disabled = true
        })
}

const flip_one_coin = document.getElementById("singlenav")
// Add event listener for coin button
flip_one_coin.addEventListener("click", revealSinglenav)
function revealSinglenav() {
    document.getElementById("single").setAttribute("class", "display: normal");

}

const guess_the_result = document.getElementById("guessnav")
// Add event listener for coin button
guess_the_result.addEventListener("click", revealGuessnav)
function revealGuessnav() {
    document.getElementById("guess").setAttribute("class", "display: normal");

}


const guessHeads = document.getElementById("guessHeads")
// Add event listener for coin button
guessHeads.addEventListener("click", guessHeadsFunc)
function guessHeadsFunc() {
    // document.getElementById("quarter").setAttribute("style", "display: true");

    fetch('http://localhost:5555/app/flip/call', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({guess: "heads"}) // body data type must match "Content-Type" header
    },
        { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            // document.getElementById("result").innerHTML = result.flip;
            document.getElementById("guessIMG").setAttribute("src", "./assets/img/" + "heads.png")
            document.getElementById("resultIMG").setAttribute("src", "./assets/img/" + result.flip + ".png");
            if (result.flip === "heads"){
                document.getElementById("win").innerHTML = "you win";
            }
            else{
                document.getElementById("win").innerHTML = "you lose"; 
            }
        })
}



const guessTails = document.getElementById("guessTails")
// Add event listener for coin button
guessTails.addEventListener("click", guessTailsFunc)
function guessTailsFunc() {
    // document.getElementById("quarter").setAttribute("style", "display: true");

    fetch('http://localhost:5555/app/flip/call', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({guess: "tails"}) // body data type must match "Content-Type" header
    },
        { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            // document.getElementById("result").innerHTML = result.flip;
            document.getElementById("guessIMG").setAttribute("src", "./assets/img/" + "tails.png")
            document.getElementById("resultIMG").setAttribute("src", "./assets/img/" + result.flip + ".png");
            if (result.flip === "tails"){
                document.getElementById("win").innerHTML = "you win";
            }
            else{
                document.getElementById("win").innerHTML = "you lose"; 
            }
        })
}



