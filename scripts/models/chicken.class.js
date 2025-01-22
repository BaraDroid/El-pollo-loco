class Chicken extends MovableObject {
    y = 330;
    height = 100;
    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    

    constructor(){
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random()*500;
        this.animate();
        this.loadImages(this.IMAGES_WALKING);
        this.moveFeet();
    }

    animate() {
        setInterval(() => {
            this.x -= 1;
        }, 1000/50)  
    }

    moveFeet(){
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 1000/10); 
    }
}