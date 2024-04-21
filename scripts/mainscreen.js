document.addEventListener("DOMContentLoaded", function () {
  //Create article (car info)
  const $main = document.getElementById("main");

  fetch("./json/car.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => {
        const $article = document.createElement("article");
        $article.classList.add("car-profile");

        const $img = document.createElement("img");
        $img.classList.add("car-img");
        $img.src = car.image;

        const $carInfo = document.createElement("ul");
        $carInfo.classList.add("car-info");

        const $brand = document.createElement("li");
        $brand.classList.add("car-brand");
        $brand.textContent = `Brand: ${car.brand}`;

        const $model = document.createElement("li");
        $model.classList.add("car-model");
        $model.textContent = `Model: ${car.model}`;

        const $year = document.createElement("li");
        $year.classList.add("car-year");
        $year.textContent = `Year: ${car.year}`;

        const $mileage = document.createElement("li");
        $mileage.classList.add("car-mileage");
        $mileage.textContent = `Mileage: ${car.mileage} km`;

        const $engine = document.createElement("li");
        $engine.classList.add("car-engine");
        $engine.textContent = `Engine power: ${car.engine}`;

        const $price = document.createElement("li");
        $price.classList.add("car-price");
        $price.textContent = `Price: ${car.price} zl`;

        $carInfo.append($img, $brand, $model, $year, $mileage, $engine, $price);
        $article.append($carInfo);
        $main.append($article);

        // show one car, hide other  after click

        $article.addEventListener("click", function () {
          $article.classList.add("explorer");
          let $arrayArticle = document.getElementsByClassName("car-profile");
          for (let i = 0; i < $arrayArticle.length; i++) {
            if (!$arrayArticle[i].classList.contains("explorer")) {
              $arrayArticle[i].classList.add("hide");
            }
          }
          const hiddenElements = document.querySelectorAll(".hide");
          hiddenElements.forEach(function (element) {
            element.remove();
          });
          // change title name after click
          const $carBrand = document.querySelector(".car-brand");
          let carBrandText = $carBrand.textContent;
          carBrandText = carBrandText.replace("Brand: ", "");
          const $carModel = document.querySelector(".car-model");
          let carModelText = $carModel.textContent;
          carModelText = carModelText.replace("Model: ", "");
          document.title = `${carBrandText} ${carModelText} - Car Details`;
          // delete display:grid from #main
          const $main = document.getElementById("main");
          $main.style.display = "block";
          const $carInfo = document.querySelector(".car-info");
          $carInfo.style.display = "block";
        });
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
