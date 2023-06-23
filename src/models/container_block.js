const Block = require('./block.js')

class ContainerBlock extends Block {
  constructor (id, type, data, context) {
    super(id, type, context)
    this.type = 'container_block'
  }
}

 module.exports = ContainerBlock;