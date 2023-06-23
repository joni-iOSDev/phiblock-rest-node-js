const Block = require('./block.js')

class MainContainerBlock extends Block {
  constructor (id, data,context) {
    const type = "main_container_block"; 
    super(id, type, context);
    this.status_bar = data.status_bar
    this.app_bar = data.app_bar
    this.body = data.body
  }
}

 module.exports = MainContainerBlock;