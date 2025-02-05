class ThrowableObject extends MovableObject{
    height = 60;
    width = 60;
    accelaration = 5;
    collapse = false;    //wird auf true gesetzt, wenn sich die Flasche zerstören soll
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
    static IMAGES_BROKEN = [
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
    this.loadImages(ThrowableObject.IMAGES_BROKEN);
    this.x = x;
    this.y = y;
    this.throw();
    this.checkBottleCollision();
    this.bottleOnGround();
}

throw() {
    this.speedY = 45;
    this.applyGravity();
    setInterval(() => {
        this.playAnimation(this.IMAGES_THROWN);
        this.x += 25;
    }, 1000/15);
}

checkBottleCollision() {
    setInterval(() => {
        console.log("throwables checking");
        console.log(this);
        if (this.isColliding(this instanceof Endboss)) {
            console.log("bottle is colliding mit endboss")
            setInterval(() => {
                console.log("animation startet");
                this.playAnimation(this.IMAGES_BROKEN);
            }, 1000/15);
        }
    }, 200);
    
}

bottleOnGround() {
    setInterval(() => {
        if(this.y > 147) {
            this.playAnimation(this.IMAGES_BROKEN);
        }
    }, 200);
}
// animateCollaps() {  //animation, if bottle is colliding with endboss 
//     if(this.collapse) {
//         this.playAnimation(this.IMAGES_BROKEN);
//     }
    
// }



}
