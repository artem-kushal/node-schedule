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
        const self = this;

        return new Promise((resolve, reject) => {
            self.get(id).then(item => {
                resolve(item.remove());
            }).catch(function (err) {
                reject(err);
            })
        });
    }
}

module.exports = BaseRepository;
