class World {
  character = new Character();
  level = level1;
  static chicken = new Chicken();
  canvas;
  ctx;
  keyboard;
  static bottle;
  static collectedBottles = 0;
  collectedCoins = 0;
  camera_x = 0; //sonst starten wir in der Mitte
  statusBar = new StatusBar();
  coinBar = new Coinsbar();
  bottleBar = new Bottlesbar();
  chickenStatusBar = new Chickenstatus();
  static throwableObjects = [];
  collectableObjects = [
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
    new CollectableObject(),
  ];
  coins = [
    //20 Stück
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
  ];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.sendNewChicken();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();   //check, if an enemy touch Pepe
      this.checkThrownObjects();    //method to throw bottles
      this.checkCollisionsWithThrowableBottles();   //checks collisions with salsa bottles, thrown by Pepe
      this.checkDistanceToEndboss();  //check the distance and I can put another animation on Endboss
    }, 200);
    setInterval(() => {
      this.checkCollisionFromJump();    //checking, if Pepe jump on Chicken or Babychicken and make them dead
      this.checkCollisionsWithCollectableBottles(); //method for collecting salsa bottles from the ground
      this.checkCollisionsWithCoins();  //check collectiong of golden coins
    }, 1000/80);
  }

  checkThrownObjects() {
    if (this.keyboard.D && World.collectedBottles > 0) {
      World.bottle = new ThrowableObject(this.character.x + 90, this.character.y + 110);
      World.throwableObjects.push(World.bottle);
      World.collectedBottles--;
      this.bottleBar.setPercentage(World.collectedBottles);
    }
  }

  checkCollisionsWithCollectableBottles() {
    this.collectableObjects.forEach((obj) => {
      if (this.character.isColliding(obj)) {
        obj.y = 500;
        World.collectedBottles++;
        this.bottleBar.setPercentage(World.collectedBottles);
      }
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && this.character.y > 146 && enemy.chickenDead == false) {
        //console.log('Collision with', enemy);
        this.character.hit(enemy);
        this.character.isHurt;
        //console.log(this.character.energy);
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

checkCollisionsWithThrowableBottles() { 
        World.throwableObjects.forEach((bottle) => {
            for (let index = 0; index < world.level.enemies.length; index++) {
                const enemy = world.level.enemies[index];
                if (bottle.isColliding(enemy)) {
                    enemy.hitEnemy(enemy);
                    console.log(`${bottle} hat stattgefunden`); //das wirft [object object] raus
                    //bottle.playAnimation(ThrowableObject.IMAGES_BROKEN);
                        //hier kann er nicht auf  Thr.obj.greifen
                    
                   this.chickenStatusBar.setPercentage(World.chicken.energy);
                }
            }
        });
}

checkCollisionFromJump() {  // Überprüfen, ob das 'enemy' ein Chicken oder Babychicken ist, da Endboss nicht mit Sprung besiegbar ist
    world.level.enemies.forEach((enemy) => {
        if ((enemy instanceof Chicken || enemy instanceof Babychicken) &&
            this.character.isColliding(enemy) && this.character.y < 147) {
            enemy.hitEnemy(enemy);  
            this.chickenStatusBar.setPercentage(World.chicken.energy);
            enemy.chickenDead = true;
        }
    });
}

  checkCollisionsWithCoins() {
    this.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        coin.y = 500;
        this.collectedCoins++;
        this.coinBar.setPercentage(this.collectedCoins * 5);
      }
    });
  }

  checkDistanceToEndboss() {
    this.checkAlertDistance();
    this.checkAttackDistance();

  }

  checkAlertDistance() {
    if((world.level.enemies[3].x - this.character.x + this.character.width) < 500 && !world.level.enemies[3].isAlert && !world.level.enemies[3].alertAnimationShown) {
        console.log("nah genug");
        world.level.enemies[3].isAlert = true;
    }
  }

checkAttackDistance() {
    if (this.character.isColliding(world.level.enemies[3])) {
        console.log("attack distance erreicht");
        world.level.enemies[3].isAttacking = true;
    }
    else {world.level.enemies[3].isAttacking = false;}
}

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(World.throwableObjects);
    this.addObjectsToMap(this.collectableObjects);
    this.addObjectsToMap(this.coins);

    this.ctx.translate(-this.camera_x, 0); //moves camera with character
    //-------space for fixed objects:--------
    this.addToMap(this.chickenStatusBar);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
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
    this.ctx.save(); //erstmal speichern wir das aktuelle Kontext = die eingefüten Bilder
    this.ctx.translate(movObj.width, 0); //wir verändern die Methode, wie wir die Bilder einfügen
    this.ctx.scale(-1, 1); //und das drehen wir alles um(die x Achse ist minus)
    movObj.x = movObj.x * -1; //sonst fängt die x koordinate auch gespiegelt - also auf anderer Seite und Bild wird versetzt //also drehen wir das mithilfe von -1, unten das gleiche, damit geben wir das zurück
  }

  flipImageBack(movObj) {
    movObj.x = movObj.x * -1;
    this.ctx.restore(); //wenn das wahr ist, dass wir das Kontext verändert haben, ändern wir das wieder zu dem ursprünglichem Wert
  }

  sendNewChicken() {      //nach 6 Sekunden werden neue Chicken freigelassen
    setInterval(() => {
        let newX = Level.level_end_x + 500 + 720 * Math.random();
        let newChicken = new Chicken();
        newChicken.x = newX;
        this.level.enemies.push(newChicken);
        console.log("new chicken created");
        //tady proste do toho arraye v levelu 1 musim nacpat dalsi tri novy chicken. Jen nevim, jak ho ansprechen!
        //a taky bych chtela, aby tady zacinali az vzadu, jinak muzu "obejit" misto jejich zrodu
    }, 8000);
    setInterval(() => {
        let newX = Level.level_end_x;
        let newBabychicken = new Babychicken();
        newBabychicken.x = newX;
        this.level.enemies.push(newBabychicken);
    }, 5000);
}

}
