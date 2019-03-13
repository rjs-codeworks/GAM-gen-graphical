const delay = require('delay');
const readline = require('readline');
const settings = require("./settings.json");
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(">>GAM-gen v0.1 started")

var mode = "default";
var cfObjIndex = [];
var cfObjIndexIndex = 0;

rl.on("line",function(line) {
  var args = line.split(" ");
  //console.log(args);
  switch (args[0]) {
    case "cr":
      createObj(args);
      break;
    case "mv":
      moveObj(args);
      break;
    case "del":
      deleteObj(args);
      break;
    case "save":
      saveFile(args,cfObjIndex);
      break;
    case "help":
      console.log("to be done.");
    default:
      console.log("Unknow command. See -> help for commands.")
  }
});

function createObj (args) {
  switch (args[1]) {
    case "rect":
      cfsWrite("cube",[args[2],args[3],args[4]]);
      break;
    default:
      console.log("Unknown objectType")
  }
}

function cfsWrite(form,shape) {
 cfObjIndex[cfObjIndexIndex] = ["EW schwarz,1,Projekt","S("+shape[0]+","+shape[1]+","+shape[2]+")"];
 console.log(cfObjIndex[cfObjIndexIndex]);
 //console.log(cfObjIndex[0][0]);
 console.log("");
 cfObjIndexIndex++;
}

function saveFile(args,cfObjIndex) {
  var path;
  console.log(args[1])
  if (args === undefined || args == "" || args == " " || args == "undefined") {
    path == __dirname+"/"+"file.gap";
  } else {
    path = (__dirname+ "/"+ args[1]);
  }
  console.log(path);
  var wrStream = fs.createWriteStream(path);
  //console.log(cfObjIndex[0].length);
  for (var i = 0; i < cfObjIndex.length; i++) {
    for (var iX = 0; iX < cfObjIndex[i].length; iX++) {
    wrStream.write(cfObjIndex[i][iX]+"\r\n","utf8")
    }
  }
}


/*class command {
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
*/
