export default function createCarProfile(car) {
  const $article = document.createElement("article");
  $article.classList.add("car-profile");

  const $img = document.createElement("img");
  $img.classList.add("car-img");
  $img.src = car.image;

  const $carInfo = document.createElement("ul");
  $carInfo.classList.add("car-info", "grid", "grid-cols-2", "gap-4", "pt-4");

  const $brand = document.createElement("li");
  $brand.classList.add("car-brand");
  $brand.textContent = `Brand: ${car.brand}`;

  const $model = document.createElement("li");
  $model.classList.add("car-model");
  $model.textContent = `Model: ${car.model}`;

  const $year = document.createElement("li");
  $year.classList.add("car-year");
  $year.textContent = `Year: ${car.year}`;

  const $mileage = document.createElement("li");
  $mileage.classList.add("car-mileage");
  $mileage.textContent = `Mileage: ${car.mileage} km`;

  const $engine = document.createElement("li");
  $engine.classList.add("car-engine");
  $engine.textContent = `Engine power: ${car.engine}`;

  const $price = document.createElement("li");
  $price.classList.add("car-price");
  $price.textContent = `Price: ${car.price} zl`;

  $carInfo.append($brand, $model, $year, $mileage, $engine, $price);
  $article.append($img, $carInfo);
  return $article;
}
