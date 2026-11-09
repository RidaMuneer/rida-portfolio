// Welcome message
window.onload = function() {
    console.log("Welcome to Rida's Portfolio!");

    alert("Welcome to my Portfolio Website!");
};

// Display current year in footer
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = "<p>© " + new Date().getFullYear() +
        " Rida Muneer. All Rights Reserved.</p>";
    }
});