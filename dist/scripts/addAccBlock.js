import showTotalPrice from "./showTotalPrice.js";

export default function addAccBlock() {
  const $acc = document.querySelector(".acc");

  const $tiresButton = document.querySelector(".tires-button");
  $tiresButton.classList.add("bg-green-400", "p-1", "pl-3", "pr-3");

  $tiresButton.addEventListener("click", function () {
    $tiresButton.classList.toggle("clicked");
    if ($tiresButton.classList.contains("clicked")) {
      $tiresButton.textContent = "-";
      $tiresButton.classList.remove("bg-green-400");
      $tiresButton.classList.add("bg-red-400");
    } else {
      $tiresButton.textContent = "+";
      $tiresButton.classList.remove("bg-red-400");
      $tiresButton.classList.add("bg-green-400");
    }
    const $chosenArticle = $acc.closest(".car-profile");
    showTotalPrice($chosenArticle); // Update total price when toggling tires
  });

  const $warrantyButton = document.querySelector(".warranty-button");
  $warrantyButton.classList.add("bg-green-400", "p-1", "pl-3", "pr-3");

  $warrantyButton.addEventListener("click", function () {
    $warrantyButton.classList.toggle("clicked");
    if ($warrantyButton.classList.contains("clicked")) {
      $warrantyButton.textContent = "-";
      $warrantyButton.classList.remove("bg-green-400");
      $warrantyButton.classList.add("bg-red-400");
    } else {
      $warrantyButton.textContent = "+";
      $warrantyButton.classList.remove("bg-red-400");
      $warrantyButton.classList.add("bg-green-400");
    }
    const $chosenArticle = $acc.closest(".car-profile");
    showTotalPrice($chosenArticle); // Update total price when toggling warranty
  });
}
