var Cylon = require('cylon');
var ws = require('nodejs-websocket');

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
connection: "ardrone"
})
// Fly the bot
var bot;
function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    after(0*1000, function() {
        bot.drone.takeoff();
    });
    after(1*1000, function() {
        bot.drone.front(0.05);
        bot.drone.left(0.05);
    });
    after(4*1000, function (){
        bot.drone.left(0);
        bot.drone.front(0.05);
    });
    after(5*1000, function (){
        bot.drone.left(0);
        bot.drone.front(0);
        bot.drone.right(0.05);
    });
    after(9*1000, function (){
        bot.drone.right(0);
        bot.drone.back(0.05);
    });
    after(10*1000, function (){
        bot.drone.back(0.05);
        bot.drone.left(0.05);
    });
    after(13*1000, function() {
        bot.drone.land();
    });
    after(14*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();




