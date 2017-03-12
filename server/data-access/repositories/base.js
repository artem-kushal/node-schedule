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

    deleteById (id) {
        this.get(id).then(item => {
            return item.remove();
        }).catch(function (err) {
            return err;
        })
    }
}

module.exports = BaseRepository;
