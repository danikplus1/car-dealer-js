export default function changeTitle($article) {
  const $carBrand = $article.querySelector(".car-brand");
  let carBrandText = $carBrand.textContent;
  carBrandText = carBrandText.replace("Brand: ", "");
  const $carModel = $article.querySelector(".car-model");
  let carModelText = $carModel.textContent;
  carModelText = carModelText.replace("Model: ", "");
  document.title = `${carBrandText} ${carModelText} - Car Details`;
}
