/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-markjs',
  
  isDevelopingAddon() {
    return true;
  },
  included: function(app) {
    app.import('bower_components/mark.js/dist/jquery.mark.js');
  }
};
