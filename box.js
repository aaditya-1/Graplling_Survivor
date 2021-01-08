class Box {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var opt = {
            'restitution': 1.2,
            // 'density': 4,
            'friction': 0.4,
            'mass': 4,

        }

        this.body = Bodies.rectangle(x, y, width, height, opt);

        World.add(world, this.body);

        // camera.position.y = displayHeight / 2 - 50;


    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        // console.log(pos.x)
    }

    cam() {
        var pos = this.body.position;
        if (pos.x >= 1035 && pos.x <= 1050) {

            gamestate = "end";

        }

    }

    state() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(0, windowHeight / 2, this.width, this.height);

        random_boxes.lifetime = 0;


    }




}