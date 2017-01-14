class QuestionsModel {

  constructor(db) {
    this.db = db;
  }

  find(query, callback) {
    this.db.collection('questions').find(query, callback);
  }

  findOne(_id, callback) {

    var query = { _id: this.db.ObjectId(_id) };
    this.db.collection('questions').findOne(query, callback);

  }

  create(data, callback) {
    this.db.collection('questions').insert(data, callback);
  }

  update(_id, data, callback) {

    var query = { _id: this.db.ObjectId(_id) };
    this.db.collection('questions').update(query, data, callback);

  }

  remove(_id, callback) {

    var query = { _id: this.db.ObjectId(_id) };
    this.db.collection('questions').remove(query, callback);

  }

}

module.exports = function(db) {
  return new QuestionsModel(db);
}
