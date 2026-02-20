console.log("JS is connected!");

function loadCategories() {
  // Fetch Data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // Convert promise to json
    .then((res) => res.json())
    // send data to display
    .then((data) => disPlayCategories(data.categories));
}

function disPlayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;

    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
