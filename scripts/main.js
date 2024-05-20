import createCarProfile from "./carProfile.js";
import clickHandler from "./clickHandler.js";
import changeTitle from "./changeTitle.js";
import clientForm from "./clientForm.js";
import addAccBlock from "./addAccBlock.js";
import createPurchaseButton from "./createPurchaseButton.js";
import showTotalPrice from "./showTotalPrice.js";
import verifyForm from "./verifyForm.js";
import localStorageUpdate from "./localStorage.js";

const $main = document.getElementById("main");
const $details = document.getElementById("details");
const $clientForm = document.getElementById("client-form");
const $orderDetails = document.querySelector("#order-details");
const $orderText = document.querySelector("#order-text");

const $carsList = document.createElement("div");
$carsList.classList.add("cars-list");
localStorageUpdate();
function createReturnBtn() {
  const $returnBtn = document.createElement("button");
  $returnBtn.textContent = "Return";
  $returnBtn.addEventListener("click", () => {
    $carsList.innerHTML = "";
    $details.classList.add("hide-details");
    $clientForm.classList.add("hide-form");
    const $tiresButton = document.querySelector(".tires-button");
    const $warrantyButton = document.querySelector(".warranty-button");

    $tiresButton.classList.remove("clicked");
    $tiresButton.textContent = "+";
    $warrantyButton.classList.remove("clicked");
    $warrantyButton.textContent = "+";
    const errorString = document.querySelector(".error");
    errorString.classList.toggle("hide");

    $orderDetails.classList.add("hide");

    showAllCars();
    $details.append(returnBtn);
  });

  return $returnBtn;
}

const returnBtn = createReturnBtn();

const $purchaseBtn = createPurchaseButton();

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

      $details.append($purchaseBtn);

      $purchaseBtn.addEventListener("click", () => {
        $carsList.style.display = "none";
        $clientForm.classList.add("hide-form");
        $details.classList.add("hide-details");
        if (verifyForm()) {
          $orderDetails.classList.remove("hide");

          if (selectedCar) {
            const totalPriceString =
              document.querySelector(".total-price").textContent;
            const totalPrice = parseInt(totalPriceString.slice(12, 18));
            $orderText.textContent = `Thanks so much for your recent purchase! 
            You ordered ${selectedCar.brand} ${selectedCar.model} for ${totalPrice} zl.`;
          }
          $orderDetails.append(returnBtn);
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

clientForm();
addAccBlock();
$details.append(returnBtn);

showAllCars();
