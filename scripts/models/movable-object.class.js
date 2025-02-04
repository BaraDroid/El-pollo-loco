class MovableObject extends DrawableObject {
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


    // isColliding(movObj) {    //ursprünglich
    //     return this.x + this.offset.left + this.width - this.offset.right > movObj.x + movObj.offset.left &&
    //     this.y + this.offset.top + this.height - this.offset.bottom > movObj.y + movObj.offset.top &&
    //     this.x + this.offset.left < movObj.x + movObj.offset.left &&
    //     this.y + this.offset.top < movObj.y + this.offset.top + movObj.height - this.offset.bottom;
    // }

    // isColliding(movObj) {    //am Freitag überrbeitet
    //     return this.x + this.width - this.offset.right > movObj.x + movObj.offset.left &&
    //     this.y + this.height - (this.offset.bottom + this.offset.top) > movObj.y - (movObj.offset.top + movObj.offset.bottom) &&
    //     this.x - this.offset.right < movObj.x + movObj.width - (movObj.offset.left + movObj.offset.right) &&
    //     this.y + this.offset.top < movObj.y + this.offset.top + movObj.height - this.offset.bottom;
    // }

    isColliding(movObj) {   //basic
        return this.x + this.width > movObj.x &&
        this.y + this.height > movObj.y &&
        this.x < movObj.x + movObj.width &&
        this.y < movObj.y + movObj.height;
     }


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
                    this.energy -= 3;
                }
                else if (enemy instanceof Endboss) {
                    this.energy -= 5;
                }
                else if (enemy instanceof Babychicken) {
                    this.energy -= 1;
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
            World.chicken.energy -= 3;
        }
        else if (hittedEnemy instanceof Babychicken) {
            World.chicken.energy -= 1;
        }
        else if (hittedEnemy instanceof Endboss) {
            World.chicken.energy -= 5;
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
    }

    jump() {
        this.speedY = 30;
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