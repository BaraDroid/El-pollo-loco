class MovableObject{
    x = 120;
    y = 275;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accelaration = 1;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround()) {
            this.y -= this.speedY;  //negative Geschwindigkeit = nach unten
            this.speedY -= this.accelaration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        return this.y < 153;
    }

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(movObj) {
        return this.x + this.width > movObj.x &&
        this.y + this.height > movObj.y &&
        this.x < movObj.x &&
        this.y < movObj.y + movObj.height;
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
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
        
    }

}