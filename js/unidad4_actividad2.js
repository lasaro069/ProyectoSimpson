const grid = document.querySelector(".grid");

// Función que llama a los personajes mediante el 'fetch'
const fetchCharacters = (quantity) => {

    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quantity}`)
        .then((response) => response.json())
        .then(data => {
            var characters = [];
            //validamos si el personaje ya existe para que no se repitan
            data = data.filter((item) => characters[item.character] ? false : characters[item.character] = true);
            createCharacterCards(data);
            console.log(data);
        })
}

fetchCharacters(52);    // asignamos la cantidad de elementos que queremos traer mediante el 'fetch'

// funcipon que llama al personaje introducido en el cuadro de texto
const fetchCharacterByName = () => {

    if (search_input.value == "") { // 'search_input.value' evalua si el campo de texto
        recargarPagina();   // si es 'true' recargará la página
    }else { // si no, realizará la búsqueda del elemento 
        const search_input = document.querySelector(".search_input");
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${search_input.value}`)
            .then((response) => response.json())
            .then(data =>{
                createCharacterCards(data);
            });
    }
}

const search_input = document.querySelector(".search_input");   // variable que escucha el cuadro de texto con class="search_input"

//creamos el evento de escucha
search_input.addEventListener("change", fetchCharacterByName);  // 'change' realiza la búsqueda del cuadro de texto al dar 'enter'

// función que recarga la página 
function recargarPagina() {
    location.reload();
}

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
    })

    grid.innerHTML = cards;
}