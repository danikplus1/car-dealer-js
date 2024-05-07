export default function showTotalPrice() {
  const $totalPriceBlock = document.querySelector(".total-price");
  $totalPriceBlock.classList.remove("hide");
  const details = document.querySelector("#details");
  const $tiresButton = document.querySelector(".tires-button");
  const $warrantyButton = document.querySelector(".warranty-button");

  details.append($totalPriceBlock);

  const acc = document.querySelectorAll(".acc-btn");

  const $carPriceElement = document.querySelector(".car-price");

  let totalPrice = 0;

  const $carPriceString = $carPriceElement.textContent;
  const $carPrice = parseInt($carPriceString.slice(7, 12));
  totalPrice += $carPrice;
  $totalPriceBlock.textContent = `Total price: ${totalPrice}`;

  acc.forEach((button) => {
    button.addEventListener("click", () => {
      if ($tiresButton.textContent === "-") {
        totalPrice += 2000;
      }

      if ($warrantyButton.textContent === "-") {
        totalPrice += 5000;
      }

      $totalPriceBlock.textContent = `Total price: ${totalPrice}`;
    });
  });
}
