// Magic 8-Ball

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

let outputEl = document.getElementById("output");

function btnClicked() {
  let ask = document.getElementById("input");

  if (ask === "Does a magic 8 ball actually work?")
    outputEl.innerHTML = "How dare you doubt me!";
  else if (ask === "Is JavaScript awesome?") {
    outputEl.innerHTML = "Of Course!";
  } else {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      outputEl.innerHTML = "Absolutely!";
    } else if (randNum < 0.4) {
      outputEl.innerHTML = "Very Likely";
    } else if (randNum < 0.6) {
      outputEl.innerHTML = "Concentrate and ask again";
    } else if (randNum < 0.8) {
      outputEl.innerHTML = "Highly Unlikely";
    } else {
      outputEl.innerHTML = "Absolutely Not!";
    }
  }
}
