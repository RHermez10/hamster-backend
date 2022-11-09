const {
    MongoClient
} = require('mongodb');
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            //kolla så vi fick in ett bra db-object
            if (db) {
                _db = db.db('HamstersDB');
                console.log("Gick Bra");
            }
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    }
}