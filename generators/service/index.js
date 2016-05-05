var path = require('path'),
    Generator = require('../../generator');


module.exports = ServiceGenerator;

function ServiceGenerator(options) {
  Generator.call(this, options);
  this.directory = 'services';
}

ServiceGenerator.prototype = Object.create(Generator.prototype);

