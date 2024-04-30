export default function clickHandler($article) {
  $article.classList.add("explorer");
  let $arrayArticle = document.getElementsByClassName("car-profile");
  for (let i = 0; i < $arrayArticle.length; i++) {
    if (!$arrayArticle[i].classList.contains("explorer")) {
      $arrayArticle[i].classList.add("hide");
    }
  }
  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach(function (element) {
    element.remove();
  });
}
