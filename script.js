let bandNames = ['The Beatles', 'Green Day', 'The Rolling Stones', 'Aerosmith', 'Led Zeppelin'];

// Remove articles ('a', 'an', 'the') from band names
function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, '');
}

// Sort band names without articles in lexicographic order
bandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element
const ulElement = document.getElementById('band');

// Clear any existing content
ulElement.innerHTML = '';

// Add sorted band names to the ul element
for (const name of bandNames) {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
}


