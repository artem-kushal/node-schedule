'use strict';

class BaseRepository {
    constructor(mongooseModel) {
        this._mongooseModel = mongooseModel;
    }

    getById () {
    }

    create (data) {

    }

    update (updateData) {
    }

    updateById (updateData, id) {
    }

    delete (id) {
    }
}

module.exports = BaseRepository;
