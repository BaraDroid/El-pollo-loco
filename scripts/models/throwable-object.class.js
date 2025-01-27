class ThrowableObject extends MovableObject{
    height = 60;
    width = 60;
    accelaration = 0.5;

constructor(x, y) {
    super().loadImage('img_pollo_locco/img/6_salsa_bottle/salsa_bottle.png');
    this.x = x;
    this.y = y;
    this.throw();
}

throw() {
    this.speedY = 20;
    this.applyGravity();
    setInterval(() => {
        this.x += 10;
    }, 100);
}
}