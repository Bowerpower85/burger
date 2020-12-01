const orm = require('../config/orm');

const burger = {

    selectAll: function (cb) {

        orm.selectAll("burgers", cb);

    },

    updateOne: function (updatedDataObject, id, cb) {
        orm.updateOne("burgers", updatedDataObject, id, cb);
    },

    insertOne: function (newDataObject, cb) {
        orm.insertOne("burgers", newDataObject, cb);
    }

};

module.exports = burger;