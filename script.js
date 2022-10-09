
const rateWrapper = document.querySelector(".section_rating");
const section_rating = document.querySelectorAll(".section_rating p");


section_rating.forEach((rate, clickedIdx) => {
    rate.addEventListener("click", () => {
        rateWrapper.classList.add("disabled");
        section_rating.forEach((otherRate, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherRate.classList.add("active");
            }
        });
        console.log(`rate of index ${idx + 1} was clicked`);
        // POST to backend your rate  
    });
});

function myFunction() {
    document.getElementById("myForm").submit();
}