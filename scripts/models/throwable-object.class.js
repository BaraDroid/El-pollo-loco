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
    IMAGES_BROKEN = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

constructor(x, y) {
    super().loadImage('img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
    this.loadImages(this.IMAGES_THROWN);
    this.loadImages(this.IMAGES_BROKEN);
    this.x = x;
    this.y = y;
    this.throw();
    this.animateBrokenBottle();
}

throw() {
    this.speedY = 45;
    this.applyGravity();
    setInterval(() => {
        this.playAnimation(this.IMAGES_THROWN);
        this.x += 25;
    }, 1000/15);
}

animateBrokenBottle() {
    if (this.isColliding(world.level.enemies[0])) {
        console.log("hier kann die Animation sein");
        this.playAnimation(IMAGES_BROKEN);
    }
}

// playAnimation(images) {
//     let i = this.currentImage % images.length;
//         let path = images[i];
//     this.img = this.imageCache[path];
//     this.currentImage++;
// }

}
