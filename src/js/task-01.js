const categoriesList = document.querySelector("ul#categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

for (const item of categoriesItems) {
  const categoriesName = item.querySelector("h2").textContent;
  const categoriesElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElements}`);
}