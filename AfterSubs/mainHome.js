var userName = JSON.parse(localStorage.getItem("userName")) || "Inna";

document.querySelector("#userName").innerHTML = userName;

document.querySelector("#signOut").addEventListener("click", function() {
    window.location.href = "../index.html";
});