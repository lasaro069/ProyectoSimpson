const grid = document.querySelector(".grid");

const fetchCharacters = (quantity) => {

    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quantity}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            createCharacterCards(data);
        })
}

fetchCharacters(52);



const search_input = document.querySelector(".search_input");


const fetchCharacterByName = () => {

    if (search_input == "") {
        search_input.addEventListener("change", window.location.reload());
    }else {
        const search_input = document.querySelector(".search_input");
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${search_input.value}`)
            .then((response) => response.json())
            .then(data =>{
                createCharacterCards(data);
            })
    
    }
}

//creamos el evento de escucha
search_input.addEventListener("change", fetchCharacterByName);



// Creamos una funcion 'createCharacterCard' que recibe la informacion del fetch para pintarlo en el html
const createCharacterCards = (data) => {
    let cards = "";
    data.forEach(item => {
        cards += `
            <div class="character_card">
                <div class="character_car">
                    <div class="img_container">
                        <img class="character_img" src="${item.image}" alt="">
                    </div>
                    <div class="info_character">
                        <h4 class="character_name">${item.character}</h4>
                        <small>${item.character} Dice:</small>
                        <p>${item.quote}</p>
                    </div>
                </div>
            </div>
            

        `;
    });

    grid.innerHTML = cards;
}