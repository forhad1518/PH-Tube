

// loadCategories
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}
loadCategories()

// displayCategories
const displayCategories = (categories) =>{
    // Call categories container
    const categoriesContainer = document.getElementById('categories');


    categories.forEach((item) => {
        // create button
        const createButton = document.createElement('button');
        createButton.classList = 'btn';
        createButton.innerText = item.category;

        // append button
        categoriesContainer.append(createButton);
    });
}
// displayCategories()


// pethc video card
const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(error => console.log(error))
}
loadVideo()

// display video
const displayVideo = (videos) => {

    videos.forEach(video => {
        // video sections 
        const videoContainer = document.getElementById('video-container');
        console.log(video)
        // create video card
        const videoCard = document.createElement('div')
        videoCard.classList = 'card bg-base-100'
        videoCard.innerHTML = 
        `
            <figure class= "h-[200px] relative">
                <img
                src= ${video.thumbnail}
                alt="Shoes" class= "h-full w-full object-cover" />
                <span class="absolute right-2 bottom-2 bg-slate-950 text-white p-1 rounded-lg">${video.others.posted_date}</span>
            </figure>
            <div class="flex gap-2 py-3">
                <div>
                    <img src= ${video.authors[0].profile_picture} class="h-10 w-10 object-cover rounded-full" />
                </div>
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <div class="flex gap-2 items-center">
                        <p class="text-gray-500">${video.authors[0].profile_name}</P>
                        ${video.authors[0].verified === true ? `<img src="https://img.icons8.com/?size=40&id=41816&format=png" class="w-4 h-4"/>` : ""}
                        
                    </div>
                    <p>${video.others.views}</p>
                </div>
            </div>
        `
        videoContainer.append(videoCard)

    })

}

// {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }