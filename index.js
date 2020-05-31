const ATMOSPHERE_HEIGHT = 100;
const GRAVITY = -9.8;
const ROCKET_ACC = 10;
const SIMULATION_TICK = 100;

function applyAcceleration(object, yAcc) {
    const intitialY = object.getY();

    let y = intitialY;
    let yVel = 0;
    yAcc += GRAVITY;

    Hatch.createTimer('accTimer', SIMULATION_TICK, function () {
        // your code goes here
        object.setY(y);
        y += yVel;
        yVel += yAcc;

        Hatch.log(`Rocket y coord. =  ${y}`);

        if (y > ATMOSPHERE_HEIGHT) {
            Hatch.removeTimer('accTimer');
            Hatch.log('Launch successful! Reset rocket position.');
            object.setY(intitialY);
        }
    });
}


Hatch.onSceneClicked(function (event) {
    // your code goes here
    applyAcceleration(Space_shuttle, ROCKET_ACC);
});


Hatch.onSceneTouched(function (event) {
    //Your code goes here
    applyAcceleration(Space_shuttle, ROCKET_ACC);
});



