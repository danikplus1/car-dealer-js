import showTotalPrice from "./showTotalPrice.js";

export default function addAccBlock() {
  const $acc = document.querySelector(".acc");

  const $tiresButton = document.querySelector(".tires-button");

  $tiresButton.addEventListener("click", function () {
    $tiresButton.classList.toggle("clicked");
    if ($tiresButton.classList.contains("clicked")) {
      $tiresButton.textContent = "-";
    } else {
      $tiresButton.textContent = "+";
    }
    const $chosenArticle = $acc.closest(".car-profile");
    showTotalPrice($chosenArticle); // Update total price when toggling tires
  });

  const $warrantyButton = document.querySelector(".warranty-button");

  $warrantyButton.addEventListener("click", function () {
    $warrantyButton.classList.toggle("clicked");
    if ($warrantyButton.classList.contains("clicked")) {
      $warrantyButton.textContent = "-";
    } else {
      $warrantyButton.textContent = "+";
    }
    const $chosenArticle = $acc.closest(".car-profile");
    showTotalPrice($chosenArticle); // Update total price when toggling warranty
  });
}
