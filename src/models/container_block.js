const Block = require('./block.js')

class ContainerBlock extends Block {
  constructor (type, data) {
    super(type, data)
    this.type = 'container_block'
    super.data = data
  }
}

 module.exports = ContainerBlock;