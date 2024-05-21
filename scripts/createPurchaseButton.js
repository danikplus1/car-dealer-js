export default function createPurchaseButton() {
  const $purchaseBtn = document.createElement("button");
  $purchaseBtn.textContent = "Purchase";
  $purchaseBtn.classList.add("purchase-btn");
  return $purchaseBtn;
}
