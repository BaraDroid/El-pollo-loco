class Endboss extends MovableObject {
    y = 55;
    height = 400;
    width = 250;
    offset = {
        top: 100,
        bottom: 130,
        left: 37,
        right: 40
    }


    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    

    constructor(thrownBottle){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.thrownBottle = thrownBottle;   //hier ist es undefined
        this.x = 300; //je größerer Zahl, desto weiter weg steht er
        //this.speed = 0.01 + Math.random(); //falls das nicht auskommentiert wäre, bewegt er sich nach vorn
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
       //this.endbossHit();
    }

    animate(){
        setInterval(() => {
            //this.x -= this.speed; //ich will, dass er jetzt steht, erst später läuft er
            }, 1000/60); 
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000/3); 
    }

    // endbossHit() {
    //         if (this.isColliding(this.world.throwableObjects)) {
    //                 this.energy -= 100 / 7;
    //                 console.log(this.energy);
    //         }
    //     };
    
        // if (this.energy < 0) {
        //     this.energy = 0;
        //     //hier wird die Endanimation abgespielt
        // } else {
        //     this.lastHit = new Date().getTime();
        // }
    }