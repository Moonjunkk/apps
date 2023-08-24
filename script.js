const searchButton = document.querySelector('button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('input');
    const searchText = searchInput.value;
    alert(`Searching for: ${searchText}`);
});
