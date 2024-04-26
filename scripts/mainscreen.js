document.addEventListener("DOMContentLoaded", function () {
  // Create article (car info)
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

        // show one car, hide other after click
        function clickHandler() {
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

          // Remove the event listener after it's been triggered once
          $article.removeEventListener("click", clickHandler);

          // change title name after click
          const $carBrand = $article.querySelector(".car-brand");
          let carBrandText = $carBrand.textContent;
          carBrandText = carBrandText.replace("Brand: ", "");
          const $carModel = $article.querySelector(".car-model");
          let carModelText = $carModel.textContent;
          carModelText = carModelText.replace("Model: ", "");
          document.title = `${carBrandText} ${carModelText} - Car Details`;

          // delete display:grid from #main
          const $main = document.getElementById("main");
          $main.style.display = "block";
          // add Client form
          const $clientForm = document.createElement("form");
          $clientForm.classList.add("client-form");

          // Cash or Leasing
          const $leasing = document.createElement("input");
          $leasing.setAttribute("type", "radio");
          $leasing.setAttribute("id", "leasing");
          $leasing.setAttribute("name", "payment");
          $leasing.setAttribute("value", "Leasing");

          const $leasingLabel = document.createElement("label");
          $leasingLabel.setAttribute("for", "leasing");
          $leasingLabel.textContent = "Leasing";

          const $cash = document.createElement("input");
          $cash.setAttribute("type", "radio");
          $cash.setAttribute("id", "cash");
          $cash.setAttribute("name", "payment");
          $cash.setAttribute("value", "Cash");

          const $labelCash = document.createElement("label");
          $labelCash.setAttribute("for", "cash");
          $labelCash.textContent = "Cash";

          // Name, Place, Day
          const $name = document.createElement("input");
          $name.setAttribute("type", "text");
          $name.setAttribute("id", "name");
          $name.setAttribute("name", "name");

          const $labelName = document.createElement("label");
          $labelName.setAttribute("for", "name");
          $labelName.textContent = "Name & Surname";

          const $place = document.createElement("input");
          $place.setAttribute("type", "text");
          $place.setAttribute("id", "place");
          $place.setAttribute("name", "place");

          const $labelPlace = document.createElement("label");
          $labelPlace.setAttribute("for", "place");
          $labelPlace.textContent = "Pick-up place";

          const $day = document.createElement("input");
          $day.setAttribute("type", "date");
          $day.setAttribute("id", "day");
          $day.setAttribute("name", "day");

          const today = new Date();

          const twoWeeksFromToday = new Date(today);
          twoWeeksFromToday.setDate(today.getDate() + 14);

          // Format the dates as YYYY-MM-DD (required format for input type="date")
          const formattedToday = today.toISOString().split("T")[0];
          const formattedTwoWeeksFromToday = twoWeeksFromToday
            .toISOString()
            .split("T")[0];

          $day.setAttribute("min", formattedToday);
          $day.setAttribute("max", formattedTwoWeeksFromToday);

          const $labelDay = document.createElement("label");
          $labelDay.setAttribute("for", "day");
          $labelDay.textContent = "Pick-up day";

          $clientForm.append(
            $leasing,
            $leasingLabel,
            $cash,
            $labelCash,
            $labelName,
            $name,
            $labelPlace,
            $place,
            $labelDay,
            $day
          );
          $main.append($clientForm);

          //add acc block

          const $acc = document.createElement("div");
          const $tires = document.createElement("div");
          const $tiresInfo = document.createElement("p");
          $tiresInfo.textContent = "Winter tires 2000 PLN";
          const $tiresButton = document.createElement("button");
          $tiresButton.textContent = "+";
          $tiresButton.addEventListener("click", function () {
            $tiresButton.classList.toggle("clicked");
            if ($tiresButton.classList.contains("clicked")) {
              $tiresButton.textContent = "-";
            } else {
              $tiresButton.textContent = "+";
            }
          });

          const $warranty = document.createElement("div");
          const $warrantyInfo = document.createElement("p");
          $warrantyInfo.textContent = "One year warranty 5000 PLN";
          const $warrantyButton = document.createElement("button");
          $warrantyButton.textContent = "+";
          $warrantyButton.addEventListener("click", function () {
            $warrantyButton.classList.toggle("clicked");
            if ($warrantyButton.classList.contains("clicked")) {
              $warrantyButton.textContent = "-";
            } else {
              $warrantyButton.textContent = "+";
            }
          });

          $tires.append($tiresInfo, $tiresButton);
          $warranty.append($warrantyInfo, $warrantyButton);
          $acc.append($tires, $warranty);
          $main.append($acc);

          // add purchase block
          const $purchase = document.createElement("button");
          $purchase.textContent = "Purchase";

          $main.append($purchase);
        }

        $article.addEventListener("click", clickHandler);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
