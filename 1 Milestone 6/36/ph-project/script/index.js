console.log("JS is connected!");

function loadCategories() {
  // Fetch Data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // Convert promise to json
    .then((res) => res.json())
    // send data to display
    .then((data) => disPlayCategories(data.categories));
}

function loadVideoes() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
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

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videContainer");

  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
            <figure>
                <img
                src="${video.thumbnail}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${video.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    `;

    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideoes();
