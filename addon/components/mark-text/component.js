import Ember from 'ember';
import layout from './template';
const { run, Component } = Ember;

export default Ember.Component.extend({
  layout,
  "context": "context",
  "className": "",
  "exclude": [],
  "term":"",
  
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
  },

  setupMark() {
     run.scheduleOnce('afterRender', this, function () {
        this.highlight();
      });
      this.highlight();
  },

  highlight() {
    if (this.$()) {
      let ctx = Ember.$(this.get('context'));
      let keyword= this.get("term");
      ctx.unmark({
        done: function() {
          ctx.mark(keyword);
        }
      });
    }
  }

});
