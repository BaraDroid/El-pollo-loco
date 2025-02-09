class ThrowableObject extends MovableObject {
    //#####################################################
    //################ attributes ##########################
    //#####################################################
    // height = 60;     //ursprungswerte, ich brauche das besser anschauen, deswegen größer
    // width = 60;
    height = 120;
    width = 120;
    accelaration = 5;

    //################ attributes ##########################
    static collapse = false; //wird auf true gesetzt, wenn sich die Flasche zerstören soll
    brokenBottle = false;
    brokenAnimationShown = false;

    offset = {
        top: 10,
        bottom: 20,
        left: 20,
        right: 40,
    };

    //################ images ##########################
    IMAGES_THROWN = [
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    IMAGES_BROKEN = [
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];

    //#####################################################
    //################ constructor ##########################
    //#####################################################
    constructor(x, y) {
        super().loadImage("img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png");
        this.loadImages(this.IMAGES_THROWN);
        this.loadImages(this.IMAGES_BROKEN);
        this.x = x;
        this.y = y;
        this.throw();
        this.animateCollapse();
    }

    //#####################################################
    //################ methods ##########################
    //#####################################################
    throw() {
        this.speedY = 45;
        this.applyGravity();
        setInterval(() => {
            this.playAnimation(this.IMAGES_THROWN);
            this.x += 25;
        }, 1000 / 15);
    }

    animateCollapse() {
        setInterval(() => {
            if (ThrowableObject.collapse) {
                this.brokenBottle = true;  
                this.acceleration = 0;            
            }
            if(this.brokenBottle) {
                console.log("broken animation");
                this.playAnimation(this.IMAGES_BROKEN);
            }
        }, 1000 / 80);
    }

    playCollapseAnimation(brokenImages) {
        if(!this.brokenAnimationShown) {

        }
    }

    playHurtAnimation(hurtImages) {
        if(!this.hurtAnimationShown) {
            this.wasHitImageCounter++;
            this.playAnimation(hurtImages);
            if(this.wasHitImageCounter == hurtImages.length + 1){
                this.wasHit = false;
                this.hurtAnimationShown = true;
            }
        }
        }
}
