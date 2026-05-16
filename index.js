const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const submit = document.getElementById("btn");

console.log(nom);
console.log(email);
console.log(password);
console.log(submit);

submit.addEventListener("click", function(event) {

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    event.preventDefault();
    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});