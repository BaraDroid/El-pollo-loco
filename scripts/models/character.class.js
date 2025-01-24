class Character extends MovableObject {
    height = 280;
    width = 130;
    y = 153;
    speed = 5;
    IMAGES_WALKING = [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-39.png',
    ];
    world;
    walking_sound = new Audio('audio/footsteps.mp3');

    

    constructor(){
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }



    animate(){
        
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.speedY = 15;   //wenn das 30 war, ist er weg von der canvas gesprungen
                this.y = this.speedY; //ursprünglich speedY auf 30 gesetzt, aber wo haben wir speedY initialisiert?
                console.log("pfeil oben gedrückt");
                console.log(this.speedY);
            }
            this.world.camera_x = -this.x + 100;
            }, 1000/60);

        setInterval(() => {
            this.walking_sound.pause();
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }

            else{
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //this.x += this.speed; das muss weg, sonst läuft er weiterhin, auch nach dem Ende, auch wenn das als "gegen Wind" erscheint
                //walk animation
                this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALKING);
            }
        }
        }, 50);  
}
}
