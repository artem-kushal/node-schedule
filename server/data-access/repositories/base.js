'use strict';

class BaseRepository {
    constructor(mongooseModel) {
        this._mongooseModel = mongooseModel;
    }

    get (id) {
        return this._mongooseModel.findById(id).exec();
    }

    getAll () {
        return this._mongooseModel.find();
    }

    delete (id) {
        this.get(id).then(function (item) {
            return item.remove();
        }).catch(function (err) {
            return err;
        })
    }
}

module.exports = BaseRepository;
