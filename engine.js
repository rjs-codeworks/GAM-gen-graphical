const delay = require('delay');
const readline = require('readline');
const settings = require("./settings.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var mode = "default";

class command {
  constructor(commandF,DEFfunction) {
    this.DEFfunction = DEFfunction;
    this.command = commandF;
  }
  command() {
    return commandF;
  }
  call() {
    DEFfunction();
  }
}

var commands = [
  createObj = new command("create", function () {
    
  })
]

rl.on('line', function(line) {
    args = line.split(" ");
    for (var i = 0; i < commands.length; i++) {
      if (commands[i].command == line) {
        console.log(">>Command registered");
        commands[i].call;
        return;
      } else {
        console.log(">>Unknow Command");
      }
    }
})
