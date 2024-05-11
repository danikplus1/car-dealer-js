import createCarProfile from "./carProfile.js";
import clickHandler from "./clickHandler.js";
import changeTitle from "./changeTitle.js";
import clientForm from "./clientForm.js";
import accBlock from "./accessories.js";
import purchase from "./purchase.js";
import showTotalPrice from "./showTotalPrice.js";
import verifyForm from "./verifyForm.js";
import localStorageUpdate from "./localStorage.js";

const $main = document.getElementById("main");
const $details = document.getElementById("details");
const $clientForm = document.getElementById("client-form");

const $carsList = document.createElement("div");
$carsList.classList.add("cars-list");
localStorageUpdate();
function createReturnBtn() {
  const $returnBtn = document.createElement("button");
  $returnBtn.textContent = "Return";
  $returnBtn.addEventListener("click", () => {
    $carsList.innerHTML = "";
    $details.classList.toggle("hide-details");
    $clientForm.classList.toggle("hide-form");
    const $tiresButton = document.querySelector(".tires-button");
    const $warrantyButton = document.querySelector(".warranty-button");

    $tiresButton.classList.toggle("clicked");
    $tiresButton.textContent = "+";
    $warrantyButton.classList.toggle("clicked");
    $warrantyButton.textContent = "+";
    const errorString = document.querySelector(".error");
    errorString.classList.toggle("hide");

    showAllCars();
  });

  $details.append($returnBtn);
}

const $purchase = purchase();

let selectedCar;

export default function showAllCars() {
  fetch("./json/car.json")
    .then((response) => response.json())
    .then((data) => {
      $carsList.innerHTML = "";
      $carsList.style.display = "grid";
      data.forEach((car) => {
        const $article = createCarProfile(car);
        const articleClickHandler = function (event) {
          event.stopPropagation();
          clickHandler($article, $details);
          changeTitle($article);
          $carsList.style.display = "block";
          $clientForm.classList.toggle("hide-form");
          $details.classList.toggle("hide-details");
          $article.removeEventListener("click", articleClickHandler);
          showTotalPrice($article);
          selectedCar = car;
        };

        $article.addEventListener("click", articleClickHandler);
        $carsList.append($article);
      });

      $main.prepend($carsList);

      $details.append($purchase);

      $purchase.addEventListener("click", () => {
        if (verifyForm()) {
          $main.innerHTML = "<p>Thanks so much for your recent purchase!</p>";
          const $orderDetails = document.createElement("p");
          $orderDetails.classList.add("order-details");
          $main.append($orderDetails);
          if (selectedCar) {
            $orderDetails.textContent = `You ordered ${selectedCar.brand} ${selectedCar.model}.`;
          }
        }
      });

      $details.classList.add("hide-details");
    })
    .catch((error) => console.error("Error fetching data:", error));
}

clientForm();

accBlock();
createReturnBtn();
showAllCars();
