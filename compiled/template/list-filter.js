'use strict';

module.exports = function (h, that) {

  return function (column) {

    var options = [];
    var optNew = [];
    var selected = void 0;

    var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

    var eInput = function eInput(e) {
      that.query[column] = e;
      search(this);
    };

    that.opts.listColumns[column].map(function (option) {
      selected = option.text == that.query[column] && that.query[column] !== '';
      optNew.push(option.text);
    });

    return h(
      'div',
      { 'class': 'minWd100 wd100 VueTables__list-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [h(
        'bs-select',
        {
          'class': 'minWd100 wd100',
          on: {
            input: eInput
          },
          attrs: {
            name: 'vf__' + column,
            value: that.query[column] }
        },
        ['options=', optNew]
      )]
    );
  };
};