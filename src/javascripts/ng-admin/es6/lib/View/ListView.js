import View from './View';

class ListView extends View {
    constructor(entity) {
        super(entity);

        this._type = 'ListView';
        this.__perPage = 30;
        this._actions = new Set();
        this._filters = new Set();

        this._sortField = null;
        this._sortDir = null;
    }

    get _perPage() {
        return this.__perPage;
    }

    set _perPage(perPage) {
        this.__perPage = perPage > 0 ? perPage : 0;
    }

    /**
     * @deprecated
     */
    perPage() {
        if (arguments.length) {
            this.__perPage = arguments[0];
            return this;
        }

        return this.__perPage;
    }

    /**
     * @deprecated
     */
    sortField() {
        if (arguments.length) {
            this._sortField = arguments[0];
            return this;
        }

        return this._sortField;
    }

    /**
     * @deprecated
     */
    sortDir() {
        if (arguments.length) {
            this._sortDir = arguments[0];
            return this;
        }

        return this._sortDir;
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
