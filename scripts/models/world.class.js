class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); 
        for (let index = 0; index < this.enemies.length; index++) {
            const enemy = this.enemies[index];
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        }
        let self = this
        requestAnimationFrame(function(){self.draw();});
    }
    

}