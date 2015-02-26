import View from './View';

class ListView extends View {
    constructor(entity) {
        super(entity);

        this._type = 'ListView';
        this._perPage = 30;
        this._actions = new Set();
        this._filters = new Set();
    }

    get perPage() {
        return this._perPage;
    }

    set perPage(_perPage) {
        this._perPage = _perPage > 0 ? _perPage : 0;
    }

    get infinitePagination() {
        return this.perPage === 0;
    }

    get actions() {
        return this._actions;
    }

    get filters() {
        return this._filters;
    }

    getFilterReferences() {
        // @TODO: to implement
    }
}

export default ListView;
