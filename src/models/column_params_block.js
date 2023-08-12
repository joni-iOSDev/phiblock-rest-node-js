const Block = require('./block.js')

class PhiColumnParamsBlock {
  constructor (distribution, aligment, padding) {
    this.distribution = distribution;
    this.aligment = aligment
    this.padding = padding;
  }
}

 module.exports = PhiColumnParamsBlock;