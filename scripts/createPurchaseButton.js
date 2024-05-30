export default function createPurchaseButton() {
  const $purchaseBtn = document.createElement("button");
  $purchaseBtn.textContent = "Purchase";
  $purchaseBtn.classList.add("purchase-btn");
  $purchaseBtn.addEventListener("click", () => {
    localStorage.removeItem("formData");
    $purchaseBtn.classList.add("bought");
  });

  return $purchaseBtn;
}
