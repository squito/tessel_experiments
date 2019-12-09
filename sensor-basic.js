var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var sensor = new five.Sensor("a7");

  sensor.on("change", () => console.log(sensor.value));
});

