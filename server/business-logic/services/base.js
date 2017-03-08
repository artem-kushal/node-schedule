'use strict';

class BaseService {
    constructor(Repository) {
        this._repository = new Repository();
    }

    get (opts) {
        return this._repository.get(opts);
    }

    create (data) {
        return this._repository.create(data);
    }

    delete (id) {
        return this._repository.deleteById(id);
    }
}

module.exports = BaseService;
