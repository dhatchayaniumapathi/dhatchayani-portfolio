// Get the Back to Top button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button while scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }

});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});