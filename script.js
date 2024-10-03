// creat loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

// creat displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach(item => {
        // console.log(item);

        // creat button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to category container
        categoryContainer.append(button);

    });
}


// creat loadVideos
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}
// creat displayVideos
const displayVideos = (videos) => {
    const videosContainer = document.getElementById("videos");
    videos.forEach(item => {
        console.log(item);
        // creat card
    const card = document.createElement("div");
    card.classList = ("card card-compact shadow-xl");
    card.innerHTML = `
<figure class = "h-[160px]">
    <img
      src= ${item.thumbnail};
      class="h-[full] w-[full] object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
`

    // add card of the videosContainer
    videosContainer.append(card);
    })
}

loadCategories();
loadVideos();