class ThrowableObject extends MovableObject{
    height = 60;
    width = 60;
    accelaration = 5;
    endboss;
    offset = {
        top: 10,
        bottom: 20,
        left: 20,
        right: 40
    }

    IMAGES_THROWN = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

constructor(x, y) {
    super().loadImage('img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
    this.loadImages(this.IMAGES_THROWN);
    this.x = x;
    this.y = y;
    this.throw();
    this.hit();
}

throw() {
    this.speedY = 45;
    this.applyGravity();
    setInterval(() => {
        this.playAnimation(this.IMAGES_THROWN);
        this.x += 25;
    }, 1000/15);
    
}

hit() {
    console.log("method hit funktioniert");
    let salsaBottle = World.throwableObjects;
    salsaBottle.forEach(enemy => { //jede Enemysorte nimmt unterschiedlicher Anzahl an Leben weg
        if (salsaBottle.isColliding(enemy)) {
            if (enemy instanceof Chicken) {
                enemy.energy -= 10;
            }
            else if (enemy instanceof Endboss) {
                console.log("ich schlage den endboss!");
                enemy.energy -= 100 / 7;
            }
            else if (enemy instanceof Babychicken) {
                enemy.energy -= 5;
            }
        }
    });

    // if (this.energy < 0) {
    //     this.energy = 0;
    // } else {
    //     this.lastHit = new Date().getTime();
    // }
}

}
