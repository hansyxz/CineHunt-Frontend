export function createMediaCards(data) {
    const medias = document.getElementById('media-list');
    removeToScreen();
  
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('media-item');
        div.classList.add('item-opacity')
        
        var newMedia = `
        <div class="poster-wrapper">
            <img class="media-poster" src="${item.coverImage}" alt="${item.name}">
        </div>
        <div class="media-details">
            <h2 class="media-title">${item.name}</h2>
            <p class="media-info">${addGenres(item.genre)}</p>
            <div class="media-ranting">${addRanting(item.rating)}</div>
            <p class="media-info"><i class="icon fa-regular fa-calendar-days fa-lg"></i>${item.releaseDate}</p>`

        if(item.type.toLowerCase() === "filme") {
            newMedia += `<p class="media-info"><i class="icon fa-regular fa-clock fa-lg"></i>${item.durationInMinutes} min</p>`
        } else {
            newMedia += `<p class="media-info"><i class="icon fa-regular fa-clock"></i>${item.averageEpisodesPerSeason} episódios por temporadada</p>
                         <p class="media-info"><i class="icon fa-solid fa-play"></i>${item.numberOfSeasons} temporadas</p>`
        }
        newMedia += `<p class="media-synopsis">${item.synopsis}</p></div>`;
        div.innerHTML = newMedia;
        medias.appendChild(div);
    });
    setTimeout(addToScreen, 1000);
}

function addGenres(genres) {
    let genreString = "| ";

    genres.forEach(element => {
        genreString += element + " | ";
    });

    return genreString;
}

function addRanting(rating) {
    let ratingTag = "";
    let rantingRounded = Math.round(rating / 2);

    for (let i = 0; i < rantingRounded; i++) {
        ratingTag += "<i class='fa-solid fa-star fa-lg' style='color: #FFD43B;'></i>"
    }
    for (let i = 0; i < (5 - rantingRounded); i++) {
        ratingTag += "<i class='fa-regular fa-star fa-lg' style='color: #FFD43B;'></i>"
    }
    return ratingTag;
}

function addToScreen() {
    const items = document.querySelectorAll('.item-opacity');

    items.forEach(item => {
        item.style.opacity = 1;
    });
}

function removeToScreen() {
    const items = document.querySelectorAll('.item-opacity');

    items.forEach(item => {
        item.style.opacity = 0;
    });
    
    setTimeout(() => {
        items.forEach(item => {
            item.remove();
        });
    }, 1000);
}

export function mediaNotFound() {
    removeToScreen();

    const medias = document.getElementById('media-list');
    const div = document.createElement('div');
    div.classList.add('error-gif')
    div.classList.add('item-opacity')
    div.innerHTML = `
    <h2 class='error-message'>Nenhum resultado encontrado!</h2>
    <img src='./style/assets/error.gif'>
    `;
    medias.appendChild(div);

    setTimeout(addToScreen, 1000);
}