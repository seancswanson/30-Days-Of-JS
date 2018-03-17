const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


// Fetch from endpoint
// Format response
// Save Response
fetch(endpoint).then(data => data.json()).then(data => cities.push(...data))

// findMatch
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

// displayMatch function
function displayMatch() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const formattedPop = numberWithCommas(place.population);

        const city = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const state = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${city}, ${state}</span><span class="population">${formattedPop}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatch)
searchInput.addEventListener('keyup', displayMatch)