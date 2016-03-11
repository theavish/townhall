var bookshelf = require('../config').bookshelf;

var Topic = bookshelf.Model.extend({
  tableName: 'topics'
});

module.exports = {
  Topic: Topic
};
