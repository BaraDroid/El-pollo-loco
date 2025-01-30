class Babychicken extends Chicken {
    y = 385;
    height = 50;
    width = 50;
    energy = 5;
    offset = {
        top: 10,
        bottom: 20,
        left: 10,
        right: 20
    }

    IMAGES_WALKING =[
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        //this.x = 720 + Math.random()*500;
        this.speed = 0.17 + Math.random()*0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
}