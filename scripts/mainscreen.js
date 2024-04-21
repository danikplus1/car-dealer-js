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

        const $engine_power = document.createElement("li");
        $engine_power.classList.add("car-engine-power");
        $engine_power.textContent = `Engine power: ${car.engine_power} km`;

        const $price = document.createElement("li");
        $price.classList.add("car-price");
        $price.textContent = `Price: ${car.price} zl`;

        $carInfo.append(
          $img,
          $brand,
          $model,
          $year,
          $mileage,
          $engine_power,
          $price
        );
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
        });
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
