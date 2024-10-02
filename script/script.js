

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
        console.log(item)
        // create button
        const createButton = document.createElement('button');
        createButton.classList = 'btn';
        createButton.innerText = item.category;

        // append button
        categoriesContainer.append(createButton);
    });
}
displayCategories()