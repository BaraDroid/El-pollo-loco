class Bottlesbar extends StatusBar{
    IMAGES_BAR = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle//green/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle//green/100.png'
    ];

constructor() {
        super();
        this.loadImages(this.IMAGES_BAR);
        this.y = 125;
        this.setPercentage(100);
    }

}