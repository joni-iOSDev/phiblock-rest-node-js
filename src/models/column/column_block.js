const Block = require('../block.js')

class ColumnBlock extends Block {
  constructor (id, parameters, children) {
    const type = "column"; 
    const data = {id, parameters, children};
    super(type, data);
  }
}

 module.exports = ColumnBlock;