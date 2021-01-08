class Random {
    constructor(x, y) {
        this.width = 50;
        this.height = 50;

        var opt = {
            'isStatic': true
        }


    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}