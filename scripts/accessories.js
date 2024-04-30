export default function accBlock() {
  const $acc = document.createElement("div");
  const $tires = document.createElement("div");
  const $tiresInfo = document.createElement("p");
  $tiresInfo.textContent = "Winter tires 2000 PLN";
  const $tiresButton = document.createElement("button");
  $tiresButton.textContent = "+";
  $tiresButton.addEventListener("click", function () {
    $tiresButton.classList.toggle("clicked");
    if ($tiresButton.classList.contains("clicked")) {
      $tiresButton.textContent = "-";
    } else {
      $tiresButton.textContent = "+";
    }
  });

  const $warranty = document.createElement("div");
  const $warrantyInfo = document.createElement("p");
  $warrantyInfo.textContent = "One year warranty 5000 PLN";
  const $warrantyButton = document.createElement("button");
  $warrantyButton.textContent = "+";
  $warrantyButton.addEventListener("click", function () {
    $warrantyButton.classList.toggle("clicked");
    if ($warrantyButton.classList.contains("clicked")) {
      $warrantyButton.textContent = "-";
    } else {
      $warrantyButton.textContent = "+";
    }
  });

  $tires.append($tiresInfo, $tiresButton);
  $warranty.append($warrantyInfo, $warrantyButton);
  $acc.append($tires, $warranty);
  return $acc;
}
