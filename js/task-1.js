const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);

const categoryItems = categoriesList.querySelectorAll(".item");
categoryItems.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const itemLi = item.querySelectorAll("ul li");
  console.log(`Category: ${header}`);
  console.log(`Elements: ${itemLi.length}`);
});