export default function clickHandler($article) {
  const $allArticles = document.querySelectorAll(".car-profile");

  $allArticles.forEach((article) => {
    if (article !== $article) {
      article.classList.add("hide");
      article.remove();
    }
  });

  $article.classList.add("explorer");
}
