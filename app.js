// Lugar en el que se guardan los nombres de los amigos
const amigos = [];

const add_friend_button = document.querySelector(".button-add");
const friends_wrapper = document.getElementById("listaAmigos");
const friend_name_input = document.querySelector("#amigo.input-name");

add_friend_button.addEventListener("click", () => {
    const friend_name = friend_name_input.value;

    // Valida que sea un texto y que tenga contenido
    if (typeof friend_name !== "string" || friend_name.trim() === "") {
        alert("Por favor, ingresa un nombre valido");
        return;
    }

    amigos.push(friend_name);

    // Crea un elemento <li> para añadirlo a la lista
    const new_element = document.createElement("li");
    new_element.innerHTML = friend_name;

    friends_wrapper.appendChild(new_element);

    friend_name_input.value = "";
});