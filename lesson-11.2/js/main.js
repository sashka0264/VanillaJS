window.addEventListener("DOMContentLoaded", function () {

  const deletedFunction = (y) => {
    let del = document.querySelectorAll(y);

    for (let i = 0; i < del.length; i++) {
      del[i].parentNode.removeChild(del[i]);
    }
  };

  const requestFunction = (x, y) => {

    let request = new XMLHttpRequest();
    request.open("GET", "js/main.json");

    request.setRequestHeader("Content-type",
      "application/json; charset=utf-8");

    request.send();

    request.addEventListener("readystatechange", function () {

      if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);

        for (let i = 0; i < data.cars.length; i++) {
          if (data.cars[i].category == x) {

            let newImg = document.createElement("img"),
                newInf = document.createElement("div");

                newInf.classList.add(y);

                newImg.setAttribute("src", data.cars[i].img);
        
            newInf.innerHTML = data.cars[i].name + "<br>" + "<br>" +
            data.cars[i].description + "<br>" + "<br>" + data.cars[i].price + 
            "<br>" + "<br>";
            

            newImg.style.cssText = "width: 360px; height: 230px;";
            newInf.style.cssText = 
            "width: 360px; margin: 30px; display: inline-block; height: 503px;";

            newInf.appendChild(newImg);
            



            document.body.appendChild(newInf);
            

          }
        }

      } else if (request.status !== 200) {
        alert("Что-то пошло не так");
      }
    });
  };

  let germanyCheck = document.querySelector("#Germany"),
    franceCheck = document.querySelector("#France"),
    italyCheck = document.querySelector("#Italy");

  germanyCheck.addEventListener("click", () => {
    if (germanyCheck == true) {
      germanyCheck = false;

      deletedFunction(".onG");

    } else {
      germanyCheck = true;

      requestFunction("germany", "onG");
    }
  });


  franceCheck.addEventListener("click", () => {
    if (franceCheck == true) {
      franceCheck = false;

      deletedFunction(".onF");

    } else {
      franceCheck = true;

      requestFunction("france", "onF");
    }
  });


  italyCheck.addEventListener("click", () => {
    if (italyCheck == true) {
      italyCheck = false;

      deletedFunction(".onI");

    } else {
      italyCheck = true;


      requestFunction("italian", "onI");

    }
  });

});