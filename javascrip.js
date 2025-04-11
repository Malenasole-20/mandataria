
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is working!");

    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    } else {
        console.warn("Button with id 'myButton' not found.");
    }
});

