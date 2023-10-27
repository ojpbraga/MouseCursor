const cursores = document.querySelectorAll(".cursores");
const imagens = document.querySelectorAll(".cursores img");
const novoPointer = document.getElementById("novo-pointer");
const tela = document.querySelector("html");

function trocaCursor(event) {
    var cursorClicado = event.currentTarget.id;

    console.log(cursorClicado);

    tela.style.cursor = "none";

    if (cursorClicado === "mickey") {
        window.addEventListener('mousemove', (event) => {
            y = event.y + 1.5;
            x = event.x + 1.5;

            novoPointer.src = imagens[3].src;
            novoPointer.style.top = y + "px";
            novoPointer.style.left = x + "px";
        });
    }

    if (cursorClicado === "saitama") {
        window.addEventListener('mousemove', (event) => {
            y = event.y + 1.5;
            x = event.x + 1.5;

            novoPointer.src = imagens[2].src;
            novoPointer.style.top = y + "px";
            novoPointer.style.left = x + "px";
        });
    }
    if (cursorClicado === "minecraft") {
        window.addEventListener('mousemove', (event) => {
            y = event.y + 1.5;
            x = event.x + 1.5;

            novoPointer.src = imagens[1].src;
            novoPointer.style.top = y + "px";
            novoPointer.style.left = x + "px";
        });
    }
    if (cursorClicado === "marvel") {
        window.addEventListener('mousemove', (event) => {
            y = event.y + 1.5;
            x = event.x + 1.5;

            novoPointer.src = imagens[0].src;
            novoPointer.style.top = y + "px";
            novoPointer.style.left = x + "px";
        });
    }

}

function cliques(cursor) {
    cursor.addEventListener('click', trocaCursor);
}

cursores.forEach(cliques);