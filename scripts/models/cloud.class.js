class Cloud extends MovableObject{
    y = 0;  //diese ändern sich nicht, dann können wir sie hier lassen
    width = 720;    //this benutzt man nur im Constructor, nicht hier!
    height = 480;
    speed = 0.12;

    constructor(){
        super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random()*700;
        this.animate();
}

animate() {
     this.moveLeft();
}


}