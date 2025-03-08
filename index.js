const greeting = document.getElementById ("greeting")
greeting.style.texAlign = "center"
greeting.style.marginTop = "50px"
const username = window.prompt("What's your name?", "Jane" );
greeting.textContent = "Welcome to my website, "+username+"!"