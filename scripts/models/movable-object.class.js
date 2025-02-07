class MovableObject extends DrawableObject {
          //#####################################################
  //################ attributes ##########################
  //#####################################################
    //#####################################################
  //################ constructor ##########################
  //#####################################################
    //#####################################################
  //################ methods ##########################
  //#####################################################
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accelaration = 1;
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    };

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround()) {
            this.y -= this.speedY;  //negative Geschwindigkeit = nach unten
            this.speedY -= this.accelaration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject) {   //thr.object should always fall
            return true;
        }
        else{
        return this.y < 147;
        }
    }


    isColliding(movObj) {    //ursprünglich
        return this.x + this.offset.left + this.width - this.offset.right > movObj.x + movObj.offset.left &&
        this.y + this.offset.top + this.height - this.offset.bottom > movObj.y + movObj.offset.top &&
        this.x + this.offset.left < movObj.x + movObj.offset.left &&
        this.y + this.offset.top < movObj.y + this.offset.top + movObj.height - this.offset.bottom;
    }

    // isColliding(movObj) {    //am Freitag überarbeitet
    //     return this.x + this.width - this.offset.right > movObj.x + movObj.offset.left &&
    //     this.y + this.height - this.offset.bottom > movObj.y + movObj.offset.top &&
    //     this.x + this.offset.left < movObj.x + movObj.width - movObj.offset.right &&
    //     this.y + this.offset.top < movObj.y + movObj.height - movObj.offset.bottom;
    // }

    // isColliding(movObj) {   //basic
    //     return this.x + this.width > movObj.x &&
    //     this.y + this.height > movObj.y &&
    //     this.x < movObj.x + movObj.width &&
    //     this.y < movObj.y + movObj.height;
    //  }

    // hit() {
    //     if (this.isColliding (new Chicken())) {
    //         this.energy -= 3;
    //     }
    //     else if (this.isColliding (new Endboss())) {
    //         this.energy -= 5;
    //     }
    //     else if (this.isColliding (new Babychicken())) {
    //         this.energy -=1
    //     }
        
    //     if (this.energy < 0) {
    //         this.energy = 0     //es wird nicht weniger, es bleibt 0
    //     }
    //     else {
    //         this.lastHit = new Date().getTime(); //so speichert man Zeit in der Zahlenform, die vergangen sind seit 1.1.1970
    //     }   //wenn wir dieser Zeit haben, können wir auch eine Zeitspanne messen
    // }

    hit() {
        this.world.level.enemies.forEach(enemy => { //jede Enemysorte nimmt unterschiedlicher Anzahl an Energy weg
            if (this.isColliding(enemy)) {
                if (enemy instanceof Chicken) {
                    this.energy -= 1;
                }
                else if (enemy instanceof Endboss) {
                    this.energy -= 5;
                }
                else if (enemy instanceof Babychicken) {
                    this.energy -= 0.5;
                }
            }
        });
    
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitEnemy(hittedEnemy){ //every enemy taky another amount energy away, it´s one energy pool for all enemies
        if (hittedEnemy instanceof Chicken) {
            World.chicken.energy -= 1;
            console.log("chicken hit!");
        }
        else if (hittedEnemy instanceof Babychicken) {
            console.log("Küken hit!");
            World.chicken.energy -= 1;
        }
        else if (hittedEnemy instanceof Endboss) {
            console.log("Endboss hit!");
            World.chicken.energy -= 100 / 7;
            ThrowableObject.collapse = true;
        }
        if (World.chicken.energy <0) {
            World.chicken.energy = 0;
        }
        console.log(World.chicken.energy);
     }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;   //difference in ms
        timePassed = timePassed / 1000; //damit kriegen wir sekundenraus
        return timePassed < 1;  //also waren wir in letzten 5 Sek getroffen, kommt aus der Funktion TRUE raus
    }

    isDead() {
        return this.energy == 0;    //falls Energie weg ist, gibt uns diese Funktion eine Null raus
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
            let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (this instanceof Endboss && this.isAlert && !this.alertAnimationShown) {
            this.alertImageCounter++;
            if(this.alertImageCounter == images.length + 1) {
                this.alertAnimationShown = true;
                this.isAlert = false;
            }
        }
    }

    playJumpAnimation(jumpImages) {
        this.jumpImageCounter++
        if(this.isJumping && this.jumpImageCounter < jumpImages.length + 1){
            this.playAnimation(jumpImages);
        }
    }

    playSleepingAnimation(images) {
        if(!this.sleepAnimationsShown){
            this.playAnimation(images);
             this.sleepImageCounter++;
             //console.log(this.sleepImageCounter);
             if(this.sleepImageCounter == images.length * 3){
                this.sleepAnimationShown = true;
                this.sleepImageCounter = 0;
            }
        }
    }

    playHurtAnimation(images){
        if(!this.hurtAnimationShown){
            this.playAnimation(images);
            this.hurtImageCounter++;
        if(this.hurtImageCounter == images.length + 1){
            this.hurtAnimationShown = true;
            this.hurtImageCounter = 0;
        }
        }
    }

   jump() {
    this.isJumping = true;
    this.speedY = 15;   //wenn das 30 war, ist er weg von der canvas gesprungen
    this.y = this.speedY; //ursprünglich speedY auf 30 gesetzt, aber wo haben wir speedY initialisiert?
    if(this.speedY < 0 && this.y > 130)
        this.isJumping = false;
   }

    moveRight() {

        }
    

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
            }, 1000/60); 
    }

    isSleepy() {

    }

}