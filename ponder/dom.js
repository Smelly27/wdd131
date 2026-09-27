
const selectElement = document.querySelector("#webdevlist");

selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value;
    console.log("Selected:", selectedValue);
});
