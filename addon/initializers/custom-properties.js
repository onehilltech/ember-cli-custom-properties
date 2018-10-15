import Component from '@ember/component';
import CustomProperties from 'ember-cli-custom-properties/mixins/custom-properties';

export function initialize (/* application */) {
  Component.reopen (CustomProperties);
}

export default {
  initialize
};
