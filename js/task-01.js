const categoriesEl = document.querySelectorAll(".item");
// console.log(categoriesEl);
console.log("Number of categories:", categoriesEl.length);
categoriesEl.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  const elChildren = el.lastElementChild;
  const amountСhildren = elChildren.children;
    console.log("Elements:", amountСhildren.length);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5