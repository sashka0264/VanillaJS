window.addEventListener("DOMContentLoaded", () => {
    let arrow = document.querySelector("#arrow"),
        formoneCountry = document.querySelector("#formoneCountry"),
        formtwoCountry = document.querySelector("#formtwoCountry"),
        formtwo = document.querySelector("#formtwo"),
        inputFirstCountry = document.querySelector("#firstCountry"),
        inputSecondCountry = document.querySelector(".secondCountry");


    inputFirstCountry.addEventListener("input", function () {
        if (inputFirstCountry.value.length == 1) {
            inputFirstCountry.value = "+" + inputFirstCountry.value;
        }
        if (inputFirstCountry.value.length == 2) {
            inputFirstCountry.value = inputFirstCountry.value + "(";
        }
        if (inputFirstCountry.value.length == 6) {
            inputFirstCountry.value = inputFirstCountry.value + ")";

        }
    });


    inputFirstCountry.addEventListener("focus", () => {
        inputFirstCountry.value = "";
    });

    inputFirstCountry.addEventListener("keypress", event => {
        if (!/\d/.test(event.key)) {
            event.preventDefault();
        }
    });

    arrow.addEventListener("click", () => {
        if (arrow.classList.contains("on")) {
            arrow.classList.remove("on");
            formtwo.style.cssText = "visibility: hidden";
        } else {
            arrow.classList.add("on");
            formtwo.style.cssText = "visibility:";
            formtwo.style.cssText = "cursor: pointer";
            inputSecondCountry.style.cssText = "cursor: pointer";
        }
    });

    formtwo.addEventListener("click", () => {
        if (formoneCountry.textContent == "РФ") {
            formoneCountry.textContent = "Беларусь";
            formtwoCountry.textContent = "РФ";
            arrow.classList.remove("on");
            formtwo.style.cssText = "visibility: hidden";

            inputFirstCountry.placeholder = "+375 (__) ___ __ __";
            inputSecondCountry.placeholder = "+7 (___) ___ __ __";
        } else {
            formoneCountry.textContent = "РФ";
            formtwoCountry.textContent = "Беларусь";
            arrow.classList.remove("on");
            formtwo.style.cssText = "visibility: hidden";

            inputSecondCountry.placeholder = "+375 (__) ___ __ __";
            inputFirstCountry.placeholder = "+7 (___) ___ __ __";
        }
    });
});