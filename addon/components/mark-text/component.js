import Ember from 'ember';
import layout from './template';
const { run, Component } = Ember;

export default Ember.Component.extend({
  layout,
  "context": "context",
  "className": "",
  "exclude": [],
  "term":"",
  "isVisible":true,
  
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
    run.cancel(this._setupTimer);
  },

  _setupMark() {
    this.highlight();
  },

  setupMark() {
    run.cancel(this._setupTimer);
    this._setupTimer = run.scheduleOnce('afterRender', this, this._setupMark);
  },

  _highlight() {
    if (!this.$()) return;
    let keyword= this.get("term");
    if (keyword ==null)return;
    let ctx = Ember.$(this.get('context'));
    let tet= this;
    ctx.unmark().mark(keyword);
  },

  highlight() {
    let isVisible = this.get('isVisible')
    if(isVisible){
     run.later(this,this._highlight, 1000);
    }
  }

});
