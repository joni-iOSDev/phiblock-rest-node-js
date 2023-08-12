const Block = require('../block.js')
const StatusBar = require("../../models/main_container/status_bar");
const AppBar = require("../../models/main_container/app_bar");

class MainContainerBlock extends Block {
  constructor (id, status_bar = StatusBar, app_bar = AppBar, body) {
    const type = "main_container"; 
    const data = {id, status_bar, app_bar, body};
    super(type, data);
  }
}

 module.exports = MainContainerBlock;