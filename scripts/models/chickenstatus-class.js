class Chickenstatus extends StatusBar {
    IMAGES_BAR = [
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green0.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green20.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green40.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green60.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green80.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green100.png'
    ];

    constructor () {
        super().loadImage('img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green100.png');
        this.loadImages(this.IMAGES_BAR);
        this.x = 445;
        this.y = 4;
        this.width = 250;
        this.height = 65;
        this.setPercentage(World.chicken.energy);
    }

    setPercentage(percent) { 
        let imagePath = this.IMAGES_BAR[this.receiveImageIndex(percent)];
        this.img = this.imageCache[imagePath];
    }

    receiveImageIndex(percent) {
        if (percent == 100 || percent > 90) {
            return 5;
        }
        else if (percent >= 78) {
            return 4;
        }
        else if (percent >= 50) {
            return 3;
        }
        else if (percent >= 42) {
            return 2;
        }
        else if (percent >= 21) {
            return 1;
        }
        else {
            return 0;
        }
    }
}