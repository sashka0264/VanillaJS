window.addEventListener("DOMContentLoaded", () => {

    let result = document.querySelector(".calculator__result"),
        error = document.querySelector(".calculator__error");

    document.body.addEventListener("click", (e) => {
 
  
        let x = (e.target).textContent;

        if (result.textContent !== "0") {
            if ((e.target).classList.contains("calculator-buttons__item-number") == true ||
                (e.target).classList.contains("calculator-buttons__item-symbol") == true) {

                result.textContent = result.textContent + x;
            }
        } else {
            result.textContent = x;
        }
        // Если result.textContent изначально 0, то точка не будет 
        // перезаписывать это значение, а подставится после 0


        if ((e.target).classList.contains("calculator-buttons__item-symbol") == true &&
        (e.target).classList.contains("bracket") == false) {
            let arr = (result.textContent).split("");

            if (arr[arr.length - 1] == arr[arr.length - 2] || arr[arr.length - 2] == "*" ||
                arr[arr.length - 2] == "-" || arr[arr.length - 2] == "+" || arr[arr.length - 2] == "/") {
                let x = arr[arr.length - 1];
                arr.pop();
                arr.pop();
                arr.push(x);
                result.textContent = arr.join("");
                console.log("Повторение");
            }
        }
        // Повторное нажатие символов


        if ((e.target).textContent == "=") {
            if (result.textContent !== "=") {

                try {
                    result.textContent = eval(result.textContent);
                } catch (e) {
                    error.classList.add("calculator__error-active");
                    // Вот
                    setTimeout(() => {
                        error.classList.remove("calculator__error-active");
                    }, 5000);
                }

            } else {
                result.textContent = "0";
            }
        }
        // Кнопка "="

        if ((e.target).textContent == "→" && result.textContent !== "0") {
            let arr = (result.textContent).split("");
            arr.pop();
            if (arr.length == 0) {
                arr.push(0);
            }
            result.textContent = arr.join("");
        }
        // Кнопка "→"

        if ((e.target).textContent == "с") {
            result.textContent = "0";
        }
        // Кнопка "remove"
        console.log(result.textContent);
    });
});