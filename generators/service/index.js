var path = require('path'),
    Generator = require('../../generator');

module.exports = ProviderGenerator;

function ProviderGenerator(options) {
  Generator.call(this, options);
  this.directory = 'services';
}

ProviderGenerator.prototype = Object.create(Generator.prototype);

