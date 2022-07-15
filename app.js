// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  //renderButtons();
  //renderIngredientsBoard();
  //renderPrice();
}


function renderPatty() {
  let patty = document.getElementById("patty");
  let button = document.querySelector(".btn-patty")
  if (state.Patty) {
    document.getElementById("ing-patty").style.display = "inherit"
    patty.style.display = "inherit";
    button.style.boxShadow="0 9px rgb(6, 180, 6)";
  } else {
    document.getElementById("ing-patty").style.display = "none"
    patty.style.display = "none";
    button.style.boxShadow="0 9px #999";
  }
}

function renderCheese() {
  let cheese = document.getElementById("cheese");
  let button = document.querySelector(".btn-cheese")
  if (state.Cheese) {
    document.getElementById("ing-cheese").style.display = "inherit"
    cheese.style.display = "inherit";
    button.style.boxShadow="0 9px rgb(6, 180, 6)";
  } else {
    document.getElementById("ing-cheese").style.display = "none"
    cheese.style.display = "none";
    button.style.boxShadow="0 9px #999";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  let button = document.querySelector(".btn-tomatoes")
  if (state.Tomatoes) {
    document.getElementById("ing-tomato").style.display = "inherit"
    tomatoes.style.display = "inherit";
    button.style.boxShadow="0 9px rgb(6, 180, 6)";
  } else {
    document.getElementById("ing-tomato").style.display = "none"
    tomatoes.style.display = "none";
    button.style.boxShadow="0 9px #999";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  let button = document.querySelector(".btn-onions")
  if (state.Onions) {
    document.getElementById("ing-onion").style.display = "inherit"
    onion.style.display = "inherit";
    button.style.boxShadow="0 9px rgb(6, 180, 6)";
  } else {
    document.getElementById("ing-onion").style.display = "none"
    onion.style.display = "none";
    button.style.boxShadow="0 9px #999";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  let button = document.querySelector(".btn-lettuce")
  if (state.Lettuce) {
    document.getElementById("ing-lettuce").style.display = "inherit"
    lettuce.style.display = "inherit";
    button.style.boxShadow="0 9px rgb(6, 180, 6)";
  } else {
    document.getElementById("ing-lettuce").style.display = "none"
    lettuce.style.display = "none";
    button.style.boxShadow="0 9px #999";
  }
}


//////////////////////////////////

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  let total = parseInt(document.getElementById("price").innerText)
  if (state.Patty)
    total +=80
  else
    total -=80
  document.getElementById("price").innerText = total
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  let total = parseInt(document.getElementById("price").innerText)
  if (state.Cheese)
    total +=10
  else
    total -=10
  document.getElementById("price").innerText = total
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  let total = parseInt(document.getElementById("price").innerText)
  if (state.Tomatoes)
    total +=20
  else
    total -=20
  document.getElementById("price").innerText = total
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  let total = parseInt(document.getElementById("price").innerText)
  if (state.Onions)
    total +=20
  else
    total -=20
  document.getElementById("price").innerText = total
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  let total = parseInt(document.getElementById("price").innerText)
  if (state.Lettuce)
    total +=20
  else
    total -=20
  document.getElementById("price").innerText = total
  renderAll();
};


///////////////////////////////////

//Challenge 1 - Add/Remove the class active to the buttons based on state
//Done




//Challenge 2 - Render only the items selected in the ingredients board based on the state
//Done




//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
