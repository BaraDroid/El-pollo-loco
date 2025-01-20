let canvas;
let ctx;
let character = new movableObject();

function init() {   //die bindet unser Canvas an einer Variablen und dann fügen wir das BIld hinzu
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    console.log("My Character is", character);
    
}