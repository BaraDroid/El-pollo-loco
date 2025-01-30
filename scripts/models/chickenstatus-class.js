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
        super();
        this.loadImages(this.IMAGES_BAR);
        this.x = 445;
        this.y = 4;
        this.width = 250;
        this.height = 65;
        this.setPercentage(100);
    }
}