const Block = require('./block.js')

class TextfieldBlock extends Block {
  constructor (id, placeholder) {
    const type = "textfield"; 
    const data = {id, placeholder};
    super(type, data);
  }
}

 module.exports = TextfieldBlock;