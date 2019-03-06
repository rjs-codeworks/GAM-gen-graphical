const delay = require('delay');
const readline = require('readline');
const settings = require("./settings.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var mode = "default";

class command {
  constructor(commandF/*,DEFfunction*/) {
    //this.DEFfunction = DEFfunction;
    this.command = commandF;
  }
  command() {
    return commandF;
  }
}

var commands = [
  createObj = new command("create")
]

rl.on('line', function(line) {
    for (var i = 0; i < commands.length; i++) {
      if (commands[i].command == line) {
        console.log("command registerd");
      } else {
        console.log("get fucked this shit dosent exist");
      }
    }
})
