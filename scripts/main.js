import createCarProfile from "./carProfile.js";
import clickHandler from "./clickHandler.js";
import changeTitle from "./changeTitle.js";
import clientForm from "./clientForm.js";
import accBlock from "./accessories.js";
import purchase from "./purchase.js";

const $main = document.getElementById("main");
const $clientForm = clientForm();
$clientForm.style.display = "none";

const $acc = accBlock();
const $purchase = purchase();

const $returnBtn = document.createElement("button");
$returnBtn.textContent = "Return";
$returnBtn.addEventListener("click", showAllCars); // Assign the showAllCars function to the click event

function showAllCars() {
  fetch("./json/car.json")
    .then((response) => response.json())
    .then((data) => {
      $main.innerHTML = "";
      $main.style.display = "grid";
      data.forEach((car) => {
        const $article = createCarProfile(car);
        $article.addEventListener("click", function () {
          clickHandler($article);
          changeTitle($article);
          // delete display:grid from #main
          $main.style.display = "block";
          $clientForm.style.display = "block";
          $main.append($clientForm);
          $main.append($acc);
          $main.append($purchase);
          $main.append($returnBtn);
        });
        $main.append($article);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

showAllCars();
