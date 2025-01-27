class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //sonst starten wir in der Mitte
    statusBar = new StatusBar();
    coinBar = new Coinsbar();
    bottleBar = new Bottlesbar();
    throwableObject = [];
    

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrownObjects();
        
        }, 200);
    }

    checkThrownObjects() {
        if(this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
    this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
         console.log('Collision with', enemy);
         this.character.hit();
         console.log(this.character.energy);
         this.statusBar.setPercentage(this.character.energy);
        }
    });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.camera_x, 0);
        //-------space for fixed objects:--------
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        
        this.addObjectsToMap(this.level.enemies);
        

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
            this.flipImage(movObj);
        }
        movObj.draw(this.ctx); //jetzt wird Bild eingefügt, wenn if Bedingung true ist, gespiegelt eingefügt
    
            //HIER KOMMT DER RECHTECK, DASS WIR IHM DANACH JEDEM GEBEN KÖNNEN
        movObj.drawFrame(this.ctx);
        movObj.drawOffsetFrame(this.ctx);

    if (movObj.otherDirection) {
        this.flipImageBack(movObj);
        
    }
}

flipImage(movObj) {
    this.ctx.save();    //erstmal speichern wir das aktuelle Kontext = die eingefüten Bilder
    this.ctx.translate(movObj.width, 0);//wir verändern die Methode, wie wir die Bilder einfügen
    this.ctx.scale(-1, 1);//und das drehen wir alles um(die x Achse ist minus)
    movObj.x = movObj.x * -1; //sonst fängt die x koordinate auch gespiegelt - also auf anderer Seite und Bild wird versetzt //also drehen wir das mithilfe von -1, unten das gleiche, damit geben wir das zurück
}

flipImageBack(movObj) {
    movObj.x = movObj.x * -1;
        this.ctx.restore(); //wenn das wahr ist, dass wir das Kontext verändert haben, ändern wir das wieder zu dem ursprünglichem Wert
}
}