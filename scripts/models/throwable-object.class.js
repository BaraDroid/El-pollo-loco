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
}

throw() {
    this.speedY = 45;
    this.applyGravity();
    setInterval(() => {
        this.playAnimation(this.IMAGES_THROWN);
        this.x += 25;
    }, 1000/15);
}

}
