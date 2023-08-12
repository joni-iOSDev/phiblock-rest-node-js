const Block = require('../block')

class InternalButton extends Block {
  constructor (id, title, onPress) {
    const type = "internal_button"; 
    const data = {id, title, "on_press": onPress};
    super(type, data);
  }
}

 module.exports = InternalButton;


 class InternalHyperlinkButton extends Block {
  constructor (id, title, onPress, parameters) {
    const type = "internal_button"; 
    const data = {id, title, "on_press": onPress, parameters};
    super(type, data);
  }
}

 module.exports = InternalHyperlinkButton;