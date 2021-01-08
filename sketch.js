const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var point2X;
var point2Y;

var reset;
var reset_button;

var main_character;
var base;
var random_boxes = [];
var xpos = 50;
var rope;
var ypos;
var state = 0;

var x1;
var y2;
var mouseState = 1;

var count = 1;
// visibility = 255;
var sec = 0;
var gamestate = "play";
var camx;
var camy;
var camState = 1;
var level = 1;

function preload() {

    reset_button = loadImage("reset button.png");

}


function setup() {

    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    // camx = windowWidth / 2;
    // camy = windowHeight / 2 - 50;

    main_character = new Box(windowWidth / 2, windowHeight / 2 - 10, 50, 50);
    base = new Base(windowWidth / 2, windowHeight / 2 + 50, 150, 20);

    frameCount = 1;
    // camera.position.y = camy;


    reset = createSprite(windowWidth / 2, windowHeight / 2, 500, 500);
    reset.addImage("rese", reset_button);
    reset.scale = 0.2;
    reset.visible = false;

}

function draw() {

    Engine.update(engine);

    background(rgb(127, 255, 212));
    if (gamestate === "play") {
        reset.visible = false;
        drawSprites();

        ypos = random(370, 20);
        sec++;


        camx++;
        fill("red");
        main_character.display();

        fill("lime")
        base.display();


        if (frameCount % 50 == 0) {

            random_boxes.push(createSprite(xpos, ypos, 50, 50));

        }


        if (point2X !== null && point2Y !== null && state === 1) {
            for (var i = 0; i < random_boxes.length; i++) {

                if (mousePressedOver(random_boxes[i])) {

                    rope = new Rope(main_character.body, { x: point2X, y: point2Y });
                    rope.display();


                    x1 = mouseX;
                    y2 = mouseY;

                    fill("red");
                    main_character.display();

                    count = 1;

                    // second();
                } else {
                    mouseState = 2;

                    count++;
                }



            }

        }

        for (var i = 0; i < random_boxes.length; i++) {

            random_boxes[i].display();
            random_boxes[i].shapeColor = "green";

        }

        if (mouseState === 2) {
            if (count % 500 === 0) {
                console.log("game Over");
                // add gamestate end
                gamestate = "end";
            }
        }


        for (var i = 0; i < random_boxes.length - 1; i++) {
            if (sec % 150 === 0) {
                // visibility = visibility - 5
                // tint(255, visibility);
                random_boxes[i].lifetime = 5;
                if (mousePressedOver(random_boxes[i])) {
                    console.log("outside");

                }
            }

        }


        main_character.cam();

        xpos = xpos + 2;

    } else if (gamestate === "end") {
        console.log("this is else");

        reset.visible = true;

        for (var i = 0; i < random_boxes.length; i++) {

            random_boxes[i].destroy();


        }

        drawSprites();



        if (mousePressedOver(reset) && gamestate === "end") {

            window.location.reload(true);
        }

    }

}

function mouseClicked() {



    point2X = mouseX;
    point2Y = mouseY;

    state = 1;



}

// function reset() {
//     gamestate = "play";
//     main_character.reset();
// }