class Character extends MovableObject {
    height = 280;
    width = 130;
    y = 80; //jetzt ist er in der Luft, urspr.Wert 153 (das steht er auf dem Boden)
    speed = 5;
    IMAGES_WALKING = [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('audio/footsteps.mp3');

    

    constructor(){
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
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
            this.world.camera_x = -this.x + 100;
            }, 1000/60);

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //this.x += this.speed; das muss weg, sonst läuft er weiterhin, auch nach dem Ende, auch wenn das als "gegen Wind" erscheint
                //walk animation
                this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALKING);
            }

        }, 50); 
    
    }

    jump() {

    }
}