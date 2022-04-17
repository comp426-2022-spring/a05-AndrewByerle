// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button


// Event listener for whatever is being clicked 
document.addEventListener("click", activeNow);
// Replace text in anything with "active" id
function activeNow() {
    const active_now = document.activeElement
    document.getElementById("active").innerHTML = active_now;
    console.log(active_now)
}


const coin = document.getElementById("singlenav")
// Add event listener for coin button
coin.addEventListener("click", flipCoin)
function flipCoin() {
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


