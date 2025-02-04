class Coins extends CollectableObject{
    height = 120;
    width = 120;
    offset = {
        top: 45,
        bottom: 90,
        left: 42,
        right: 84
    }

    IMAGES_COINS = [
        'img_pollo_locco/img/8_coin/coin_1.png',
        'img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor(level) {
        super().loadImage('img_pollo_locco/img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COINS);
        //this.animate();
        this.level = level;
        this.distributeCoins();
        this.animateCoins();
    }

    distributeCoins() {
        //this.x = Level.level_end_x - Math.random()*2800;    //x liegt auf dem ganzen Bereich vom ersten Level, wo Pepe rumlaufen kann
        this.x = Math.max(320, Level.level_end_x - Math.random() * Level.level_end_x);
        this.y = 100 + Math.random() * (200-100);   //y liegt zwischen 342 und 400 px
    }

    animateCoins(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 1000/1.5); 
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
            let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}