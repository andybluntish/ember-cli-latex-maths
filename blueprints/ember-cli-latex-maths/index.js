/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('katex');
  }
};
