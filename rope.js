class Rope {
    constructor(bodyA, pointB) {
        var opt = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 1,
            'damping': 0.1
        }
        this.pointB = pointB;
        this.bodyA = bodyA;

        this.rope = Constraint.create(opt);
        World.add(world, this.rope);
    }

    display() {

        if (state === 1) {
            var point1, point2;
            point1 = this.rope.bodyA.position;
            // point2 = this.pointB;

            // fill("orange");
            stroke("orange");
            strokeWeight(4);
            // lineMode(CENTER);
            line(point1.x, point1.y, point2X, point2Y);

        }
    }


}