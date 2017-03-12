'use strict';

class BaseService {
    constructor(Repository, Model) {
        this._repository = new Repository();
        this._model = Model;
    }

    getAll () {
        const self = this;

        return new Promise((resolve, reject) => {
            self._repository.getAll().then(result => {
                resolve(result.map(resItem => {
                    return self._model.parse(resItem);
                }));
            }).then(err => {
                reject(err);
            })
        });
    }

    create (...args) {
        const self = this;

        return new Promise((resolve, reject) => {
            self._repository.create(...args).then(result => {
                resolve(self._model.parse(result));
            }).then(err => {
                reject(err);
            })
        });
    }

    delete (id) {
        return this._repository.deleteById(id);
    }
}

module.exports = BaseService;
