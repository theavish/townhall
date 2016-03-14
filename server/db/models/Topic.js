var bookshelf = require('../config').bookshelf;

var Topic = bookshelf.Model.extend({
  tableName: 'topics',
  comments: function() {
    return this.hasMany(Comment);
  }
});

module.exports = {
  Topic: Topic
};
