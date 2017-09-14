import Ember from 'ember';
import layout from './template';
const { run, Component } = Ember;

export default Ember.Component.extend({
  layout
  "element": "mark",
  "className": "",
  "exclude": [],
  
  didInsertElement() {
    this._super(...arguments);
    this.setupMark();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.setupMark();
  },

  willDestroy() {
    this._super(...arguments);

   /*
    if (this.get('removeDropdownOnDestroy')) {
      Ember.$('.daterangepicker').remove();
    }*/
  },

  setupMark() {
     run.scheduleOnce('afterRender', this, function () {
        this.unhighlight();
        this.highlight(term, options);
      });
      if (this.$()) {
        this.$(this.get('element')).mark("cris");
      }
    }
  },

  highlight(term, options) {
      debugger
      if (this.$()) {
        this.$(this.get('element')).mark("cris");
      }
    }
  },
});
