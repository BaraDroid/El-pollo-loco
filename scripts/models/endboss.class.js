class Endboss extends MovableObject {
    y = 55;
    height = 400;
    width = 250;
    energy = 100;
    chickenDead = false;
    isAlert = false;
    isAttacking = false;
    alertAnimationShown = false; //Schalter für alert animation, dass sie nur einmal durchgeführt wird
    alertImageCounter = 0;  //zählt Bilder in der Endanimation, dass sie nur einmal durchgeführt wird
    offset = {
        top: 150,
        bottom: 200,
        left: 50,
        right: 80
    }

    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = Level.level_end_x; //je größerer Zahl, desto weiter weg steht sie
        this.speed = 0.1 + Math.random()*0.5; //falls das nicht auskommentiert wäre, bewegt er sich nach vorn
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate(){
        setInterval(() => {
             //ich will, dass er jetzt steht, erst später läuft er
             if (!this.isAlert) {
                this.speed = 0.1 + Math.random()*0.5;
                this.x -= this.speed;
             }
            else if (this.isAlert) {
                this.speed = 0;
            }
            }, 1000/60); 
        setInterval(() => {
            if (!this.isAlert && World.chicken.energy > 0 && !this.isAttacking) {   //pokud tam nebude !is.Attacking, slepice Pepeho i pri kolizi proste prejde

                this.playAnimation(this.IMAGES_WALKING);
            }
            else if (this.isAlert) {
                this.playAnimation(this.IMAGES_ALERT);
            }
            else if (this.isAttacking) {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            else if (World.chicken.energy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    this.loadImage('img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png');
                }, 3000);
                setInterval(() => {
                    this.y += 3;    //obrazek se zesune z obrazovky pryc
                }, 1000/60);

                //a tady si nactu "you won!" obrazovku
            }
 
        }, 1000/3); 
    }

//Entfernung zwischen character und Endboss



    }