import createCarProfile from "./carProfile.js";
import changeTitle from "./changeTitle.js";
import checkPickupDay from "./checkPickupDay.js";
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
$carsList.classList.add(
  "cars-list",
  "bg-green-200",
  "grid",
  "grid-cols-1",
  "gap-x-6",
  "gap-y-10",
  "sm:grid-cols-1",
  "lg:grid-cols-2",
  "xl:grid-cols-3",
  "xl:gap-x-8",
  "justify-items-center"
);
localStorageUpdate();

function clickHandler($article) {
  const $allArticles = document.querySelectorAll(".car-profile");

  $allArticles.forEach((article) => {
    if (article !== $article) {
      article.classList.add("invisible");
      article.remove();
    }
  });

  $article.classList.add(
    "explorer",
    "visible",
    "flex",
    "flex-col",
    "sm:flex-row"
  );
  const img = document.querySelector(".car-img");
  img.classList.add("object-cover", "h-48", "lg:h-96", "lg:w-2/3", "lg:h-auto");

  const carInfo = document.querySelector(".car-info");
  carInfo.classList.add("lg:w-1/3", "lg:gap-1", "lg:pl-3");
  carInfo.classList.remove("lg:grid-cols-2");
}

function createReturnBtn() {
  const $returnBtn = document.createElement("button");
  $returnBtn.textContent = "Return";
  $returnBtn.classList.add("bg-red-300", "rounded");
  $returnBtn.addEventListener("click", () => {
    $carsList.innerHTML = "";
    $details.classList.add("invisible");
    $clientForm.classList.add("invisible");
    const $tiresButton = document.querySelector(".tires-button");
    const $warrantyButton = document.querySelector(".warranty-button");

    $tiresButton.classList.remove("clicked", "bg-red-400");
    $tiresButton.classList.add("bg-green-400");
    $tiresButton.textContent = "+";
    $warrantyButton.classList.remove("clicked", "bg-red-400");
    $warrantyButton.classList.add("bg-green-400");
    $warrantyButton.textContent = "+";
    const errorString = document.querySelector(".error");
    errorString.classList.add("invisible");

    $orderDetails.classList.add("invisible");

    showAllCars();
    $details.append(returnBtn);

    if ($purchaseBtn.classList.contains("bought") && $orderText.lenght !== 0) {
      document.getElementById("client-form").reset();
      $purchaseBtn.classList.remove("bought");
    }
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
          $clientForm.classList.remove("invisible");
          $clientForm.classList.add("visible");
          $details.classList.remove("invisible");
          $details.classList.add("visible");
          $article.removeEventListener("click", articleClickHandler);
          showTotalPrice($article);
          selectedCar = car;
        };

        $article.addEventListener("click", articleClickHandler);
        $article.classList.add("p-4");
        $carsList.append($article);
      });

      $main.prepend($carsList);

      $details.append($purchaseBtn);

      $purchaseBtn.addEventListener("click", () => {
        if (verifyForm()) {
          $carsList.style.display = "none";
          $clientForm.classList.add("invisible");
          $details.classList.add("invisible");
          $orderDetails.classList.remove("invisible");

          if (selectedCar) {
            const totalPriceString =
              document.querySelector(".total-price").textContent;
            const totalPrice = parseInt(totalPriceString.slice(12, 18));
            $orderText.textContent = `Thanks so much for your recent purchase! 
            You ordered ${selectedCar.brand} ${selectedCar.model} for ${totalPrice} zl.`;
          }
          $orderDetails.append(returnBtn);
        } else {
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

checkPickupDay();
addAccBlock();
$details.append(returnBtn);
showAllCars();
