class Endboss extends MovableObject {
    y = 55;
    height = 400;
    width = 250;
    energy = 100;
    chickenDead = false;
    offset = {
        top: 150,
        bottom: 200,
        left: 50,
        right: 80
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
    

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 350; //je größerer Zahl, desto weiter weg steht er
        //this.speed = 0.1 + Math.random(); //falls das nicht auskommentiert wäre, bewegt er sich nach vorn
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate(){
        setInterval(() => {
            //this.x -= this.speed; //ich will, dass er jetzt steht, erst später läuft er
            }, 1000/60); 
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000/3); 
    }

    animate() {
        setInterval(() => {
            
        }, 1000/60);
    }


    }