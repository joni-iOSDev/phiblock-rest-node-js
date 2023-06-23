const Block = require('./block.js')

class TextfieldBlock extends Block {
  constructor (id, data, placeholder = String, context) {
    const type = "textfield_block"; 
    super(id, type, context);
    this.placeholder = placeholder;
  }
}

 module.exports = TextfieldBlock;