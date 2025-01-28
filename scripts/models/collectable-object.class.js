class CollectableObject extends DrawableObject {
    x = 400;
    y = 400;
    height = 60;
    width = 80;
    level;
    IMAGES_BOTTLES_ON_GROUND = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(level) {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.level = level;
        this.x = this.level.level_end_x - Math.random()*2500;
    }

    distributeBottles() {
        this.x = this.level.level_end_x - Math.random()*2800;
    }
}