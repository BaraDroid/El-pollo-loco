class Character extends MovableObject {
    x = 120;
    y = 153;
    height = 280;
    width = 130;
    speed = 5;
    world;
    isJumping = false;
    wasHurt = false;
    isSleeping = false;
    isWalking = false;
    imageCounter = 0;
    sleepImageCounter = 0;
    sleepAnimationShown = false;
    jumpAnimationShown = false;
    jumpImageCounter = 0;
    hurtImageCounter = 0;
    hurtAnimationShown = false;
    walking_sound = new Audio('audio/footsteps.mp3');
    offset = {
        top: 140,
        bottom: 140,
        left: 30,
        right: 70
    }
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
    IMAGES_DEAD = [
        'img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_IDLE = [
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_IDLE_LONG = [
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    

    constructor(){
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.applyGravity();
        this.animate();
    }



animate(){
        setInterval(() => {
            this.world.camera_x = -this.x + 100;
            if (this.world.keyboard.RIGHT && this.x < Level.level_end_x) {
                this.isSleeping = false;
                this.sleepAnimationShown = false;
                this.sleepImageCounter = 0;
                this.hurtAnimationShown = false;


            this.x += this.speed;
            this.otherDirection = false;    //in welche Richtung er gespiegelt wird
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.isSleeping = false;
                this.sleepAnimationShown = false;
                this.sleepImageCounter = 0;
                this.hurtAnimationShown = false;


                this.x -= this.speed;
                this.otherDirection = true;
                }

            else if (this.world.keyboard.SPACE && !this.isAboveGround()) {  //isAboveGround gives return back
                this.jumpImageCounter = 0;
                this.jump();
                this.isSleeping = false;
                this.sleepAnimationShown = false;
                this.sleepImageCounter = 0;
                this.hurtAnimationShown = false;
            }
            else if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.SPACE && !this.world.keyboard.D && !this.sleepAnimationShown && !this.wasHurt){
                this.isSleeping = true;

            }
            }, 1000/60);

        setInterval(() => {
            this.walking_sound.pause();
            this.isWalking = false;
            this.wasHurt = false;
            if (this.isDead()) {
                this.playDeadAnimation(this.IMAGES_DEAD);
            }
                else if (this.isHurt()){
                this.playHurtAnimation(this.IMAGES_HURT);
                this.hurtAnimationShown = false;
            }
            else if (this.isAboveGround() && this.isJumping) {
                    this.playJumpAnimation(this.IMAGES_JUMPING);
            }            
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.walking_sound.play();
                this.isWalking = true;
                this.playAnimation(this.IMAGES_WALKING);
            }
             else if (this.isSleeping) {
                this.playSleepingAnimation(this.IMAGES_IDLE);
            }
            else if (this.sleepAnimationShown){
                this.playAnimation(this.IMAGES_IDLE_LONG);
            }
        }, 100);  
}

playDeadAnimation(imagesDead){
    this.playAnimation(imagesDead);
    setTimeout(() => {
        getLossScreen();
    }, 1500);
}


}
