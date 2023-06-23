const Block = require('./block.js')

class ColumnBlock extends Block {
  constructor (id, parameters, children, context) {
    const type = "column"; 
    super(id, type, context);
    this.parameters = parameters;
    this.children = children;
  }
}

 module.exports = ColumnBlock;