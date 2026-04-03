const reviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

reviewsDisplay.textContent = numReviews;

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);
