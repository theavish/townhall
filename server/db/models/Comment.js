var bookshelf = require('../config').bookshelf;
var Topic = require('./Topic');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  topic: function() {
    return this.belongsTo(Topic);
  }
});

module.exports = {
  Comment: Comment
};
