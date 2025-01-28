class CollectableObject extends DrawableObject {
    x;
    y = 400;
    height = 60;
    width = 80;
    level;

    
    offset = {
        top: 10,
        bottom: 20,
        left: 20,
        right: 40
    }

    IMAGES_BOTTLES_ONGROUND = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
 
    constructor(level) {
        super().loadImage(this.IMAGES_BOTTLES_ONGROUND[this.getBottleImage()]);
        this.level = level;
        this.distributeCollectables() //das ist richtig, auch wenn das unterstrichen ist
        this.getBottleImage();
        //this.pickBottle();
    }

    distributeCollectables() {
        this.x = Level.level_end_x - Math.random()*2800;
    }

    getBottleImage() {
        let randomIndex = Math.floor(Math.random()*2);
        return randomIndex;
    }

}