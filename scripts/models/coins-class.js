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
        
    ];

    constructor(level) {
        super().loadImage('img_pollo_locco/img/8_coin/coin_1.png');
        this.level = level;
        this.distributeCoins();
    }

    distributeCoins() {
        //this.x = Level.level_end_x - Math.random()*2800;    //x liegt auf dem ganzen Bereich vom ersten Level, wo Pepe rumlaufen kann
        this.x = Math.max(100, Level.level_end_x - Math.random() * Level.level_end_x);
        this.y = 100 + Math.random() * (200-100);   //y liegt zwischen 342 und 400 px
    }
}