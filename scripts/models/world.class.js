class World {
    character = new Character();
    level = level1;
    canvas;
    
    ctx;
    keyboard;
    camera_x = 0; //sonst starten wir in der Mitte
    
    

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        
        let self = this
        requestAnimationFrame(function(){self.draw();});
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(movObj) {
        if (movObj.otherDirection) {
            this.ctx.save();    //erstmal speichern wir das aktuelle Kontext = die eingefüten Bilder
            this.ctx.translate(movObj.width, 0);//wir verändern die Methode, wie wir die Bilder einfügen
            this.ctx.scale(-1, 1);//und das drehen wir alles um(die x Achse ist minus)
            movObj.x = movObj.x * -1; //sonst fängt die x koordinate auch gespiegelt - also auf anderer Seite und Bild wird versetzt
        }       //also drehen wir das mithilfe von -1, unten das gleiche, damit geben wir das zurück
    this.ctx.drawImage(movObj.img, movObj.x, movObj.y, movObj.width, movObj.height);//jetzt wird Bild eingefügt, wenn if Bedingung true ist, gespiegelt eingefügt
    
    if (movObj.otherDirection) {
        movObj.x = movObj.x * -1;
        this.ctx.restore(); //wenn das wahr ist, dass wir das Kontext verändert haben, ändern wir das wieder zu dem ursprünglichem Wert
        
    }
}
}