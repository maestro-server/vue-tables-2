'use strict';

var axios = require('axios');

module.exports = function (data) {
  var _this = this;

  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  if (typeof axios !== 'undefined') return axios.get(this.url, {
    params: data,
    headers: headers
  }).catch(function (e) {
    _this.dispatch('error', e);
  });

  throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource)";
};