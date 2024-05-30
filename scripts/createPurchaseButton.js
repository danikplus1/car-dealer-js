export default function createPurchaseButton() {
  const errorString = document.querySelector(".error");
  const $purchaseBtn = document.createElement("button");
  $purchaseBtn.textContent = "Purchase";
  $purchaseBtn.classList.add("purchase-btn");
  $purchaseBtn.addEventListener("click", () => {
    localStorage.removeItem("formData");
    $purchaseBtn.classList.add("bought");
  });

  return $purchaseBtn;
}
