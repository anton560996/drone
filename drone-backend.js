var Cylon = require('cylon');
var ws = require('nodejs-websocket');
function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after(10*1000, function() {
        bot.drone.land();
    });
    after(15*1000, function() {
        bot.drone.stop();
    });
}

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
        bot.drone.takeoff(1);
    });
    after(1*1000, function() {
        bot.drone.takeoff(0);
        bot.drone.frontspeed(1);
        bot.drone.leftspeed(1);
    });
    after(4*1000, function (){
        bot.drone.leftspeed(0);
        bot.drone.frontspeed(1);
    });
    after(5*1000, function (){
        bot.drone.leftspeed(0);
        bot.drone.frontspeed(0);
        bot.drone.rightspeed(1);
    });
    after(9*1000, function (){
        bot.drone.rightspeed(0);
        bot.drone.backspeed(1);
    });
    after(10*1000, function (){
        bot.drone.backspeed(1);
        bot.drone.leftspeed(1);
    });
    after(13*1000, function() {
        bot.drone.land(1);
    });
    after(14*1000, function() {
        bot.drone.stop(1);
    });
}

Cylon.start();




