class Application {
    constructor(title, baseApiUrl) {
        this._title = title;
        this.baseApiUrl = baseApiUrl;
        this._layout = false;

        this._entities = [];
    }

    get entities() {
        return this._entities;
    }

    getViewsOfType(type) {
        return this._entities.map(entity => entity.views[type]);
    }

    getRouteFor(view, entityId) {

        var entity = view.entity;
        var baseApiUrl = entity.baseApiUrl || this.baseApiUrl;

        var url = this.baseApiUrl + entity.name() + (entityId ? '/' + entityId : '');

        // Add baseUrl for relative URL
        if (!/^(?:[a-z]+:)?\/\//.test(url)) {
            url = baseApiUrl + url;
        }

        return url;
    }

    layout() {
        if (arguments.length) {
            this._layout = arguments[0];
            return this;
        }

        return this._layout;
    }

    title() {
        if (arguments.length) {
            this._title= arguments[0];
            return this;
        }

        return this._title;
    }
}

window.ngadmin = window.ngadmin || {};
window.ngadmin.Application = Application;

export default Application;
