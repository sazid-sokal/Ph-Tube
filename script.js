//getTime Function
function getTimeString (time){
    const hour = parseInt(time /60);
    const minute = parseInt(time % 60);
    const second = parseInt(time % 3600);
    return `${hour} hours ${minute} minutes ago`
}
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
<figure class = "h-[160px] relative">
    <img
      src= ${item.thumbnail};
      class="h-[full] w-[full] object-cover"
      alt="Shoes" />
      ${
        item.others.posted_date?.length == 0? "" : `<span class="text-xs absolute bg-black text-gray-400 p-1 rounded-lg bottom-2 right-1">${getTimeString (item.others.posted_date)}</span>`
      }
  </figure>
  <div class="flex gap-4 items-center py-4 px-1">
    <div class="w-[50px] h-[50px]">
    <img class="w-[50px] h-[50px] rounded-full" src = ${item.authors[0].profile_picture}>
    </div>
    <div>
    <h2 class="card-title">${item.title}</h2>
        <div class="flex items-center gap-2">
        <p>${item.authors[0].profile_name}</p> 
        ${
            item.authors[0].verified == true? `<img class="w-[20px] h-[20px]" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000">` : ""
        }
        </div>
    <p>${item.others.views}</p>
    </div>
  </div>
`

    // add card of the videosContainer
    videosContainer.append(card);
    })
}

loadCategories();
loadVideos();