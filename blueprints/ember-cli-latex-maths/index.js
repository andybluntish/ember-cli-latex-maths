/* eslint-env node */
'use strict';

module.exports = {
  description: '',
  normalizeEntityName() {},
  afterInstall() {
    return this.addBowerPackageToProject('katex');
  }
};
