class Base {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var opt = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, width, height, opt);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}