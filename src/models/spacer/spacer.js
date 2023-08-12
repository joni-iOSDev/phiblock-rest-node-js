const Block = require('../block.js')

class SpacerBlock extends Block {
    constructor (id, size) {
        const type = "spacer"; 
        const data = {id, size};
        super(type, data);
      }
}

module.exports = SpacerBlock;