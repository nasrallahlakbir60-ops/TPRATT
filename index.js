const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const submit = document.getElementById("btn");

console.log(nom);
console.log(email);
console.log(password);
console.log(submit);

submit.addEventListener("click", function(event) {
    event.preventDefault();

    if (nom.value === "") {
        alert("Please enter your name.");
        return;
    }
    else if (email.value === "") {
        alert("Please enter your email.");
        return;
    }
    else if (password.value === "") {
        alert("Please enter your password.");
        return;
    }
    else if (nom.value === "" && email.value === "" && password.value === "") {
        alert("Please fill in all fields.");
        return;
    }
   if (password.value.length < 8) {
    alert("Le mot de passe doit contenir au moins 8 caractères.");
    return;
}

if (
    !/[A-Z]/.test(password.value) ||      !/[a-z]/.test(password.value) ||      !/[0-9]/.test(password.value) ||      !/[!@#$%^&*(),.?":{}|<>]/.test(password.value) 
) {
    alert("Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un symbole.");
    return;
}
    if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});