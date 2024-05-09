export default function purchase() {
  const $purchase = document.createElement("button");
  $purchase.textContent = "Purchase";
  $purchase.classList.add("purchase-btn");

  return $purchase;
}
