class Endboss extends MovableObject {
    y = 55;
    height = 400;
    width = 250;
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
        this.x = 200; //je größerer Zahl, desto weiter weg steht er
        //this.speed = 0.01 + Math.random(); //falls das an ist, bewegt er sich nach vorn
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
}