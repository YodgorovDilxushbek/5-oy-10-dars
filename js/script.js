const username = document.querySelector("#input1");
const password = document.querySelector("#input2");
const button = document.querySelector("#btn");
const logInPage = document.querySelector(".container");
const realPage = document.querySelector("#open-site-title");
const danger = document.querySelector("#danger");

const correctUsername = "admin";
const correctPassword = "123456";

button.addEventListener("click", function (event) {
    event.preventDefault(); 
    if (username.value === correctUsername && password.value === correctPassword) {
        logInPage.style.display = "none"; 
        realPage.style.display = "block"; 
    } else {
        danger.style.display = "block"; 
    }
});
