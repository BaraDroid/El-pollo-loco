class MovableObject extends DrawableObject {
    //#####################################################
    //################ attributes ##########################
    //#####################################################

    //################ flags ##########################
    otherDirection = false;
    lastHit = 0;

    //################ falling ##########################
    speedY = 0;
    accelaration = 1;
    energy = 100;

    //#####################################################
    //################ methods ##########################
    //#####################################################

    //################ jumping ##########################
    jump() {
        this.isJumping = true;
        this.speedY = 15; //wenn das 30 war, ist er weg von der canvas gesprungen
        this.y = this.speedY; //ursprünglich speedY auf 30 gesetzt, aber wo haben wir speedY initialisiert?
        if (this.speedY < 0 && this.y > 130) this.isJumping = false;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY; //negative Geschwindigkeit = nach unten
                this.speedY -= this.accelaration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;    //thr.object should always fall
        } else {
            return this.y < 147;    //alles andere bleibt auf dem Boden
        }
    }

    //################ collisions ##########################
    isColliding(movObj) {
        return (
            this.x + this.offset.left + this.width - this.offset.right >
            movObj.x + movObj.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom >
            movObj.y + movObj.offset.top &&
            this.x + this.offset.left < movObj.x + movObj.offset.left &&
            this.y + this.offset.top <
            movObj.y + this.offset.top + movObj.height - this.offset.bottom
        );
    }

    // isColliding(movObj) {   //basic
    //     return this.x + this.width > movObj.x &&
    //     this.y + this.height > movObj.y &&
    //     this.x < movObj.x + movObj.width &&
    //     this.y < movObj.y + movObj.height;
    //  }

    //################ hits ##########################
    hit() {
        this.world.level.enemies.forEach((enemy) => {
            //jede Enemysorte nimmt unterschiedlicher Anzahl an Energy weg
            if (this.isColliding(enemy)) {
                if (enemy instanceof Chicken) {
                    this.energy -= 1;
                } else if (enemy instanceof Endboss) {
                    this.energy -= 5;
                } else if (enemy instanceof Babychicken) {
                    this.energy -= 0.5;
                }
            }
        });
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); //wenn wir dieser Zeit haben, können wir auch eine Zeitspanne messen
        }
    }

    hitEnemy(hittedEnemy) {
        //every enemy take another amount energy away, it´s one energy pool for all enemies
        if (hittedEnemy instanceof Chicken) {
            World.chicken.energy -= 1;
            console.log("chicken hit!");
        } else if (hittedEnemy instanceof Babychicken) {
            console.log("Küken hit!");
            World.chicken.energy -= 1;
        } else if (hittedEnemy instanceof Endboss) {
            console.log("Endboss hit!");
            World.chicken.energy -= 100 / 7;
            ThrowableObject.collapse = true;
        }
        if (World.chicken.energy < 0) {
            World.chicken.energy = 0;
        }
    }

    //################ animation ##########################
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (this instanceof Endboss && this.isAlert && !this.alertAnimationShown) {
            this.alertImageCounter++;
            if (this.alertImageCounter == images.length + 1) {
                this.alertAnimationShown = true;
                this.isAlert = false;
            }
        }
    }


}
