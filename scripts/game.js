let canvas;
let world;
let keyboard = new Keyboard();

function init() {   //die bindet unser Canvas an einer Variablen und dann fügen wir das BIld hinzu
    canvas = document.getElementById("canvas");
    world = new World(canvas);

    console.log("My Character is", world["character"]);
}

window.addEventListener('keypress', (event) => {
    console.log(event);
});