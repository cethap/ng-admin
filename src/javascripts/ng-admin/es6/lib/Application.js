import Factory from "./Factory";

class Application {
    constructor(title, baseApiUrl) {
        this.baseApiUrl = baseApiUrl;

        this._factory = new Factory();

        this._title = title;
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

    entity(name) {
        return this._factory.entity(name);
    }

    field(name, type) {
        return this._factory.field(name, type);
    }

    /** @deprecated use entities collection directly */
    addEntity(entity) {
        this._entities.push(post);
    }
}

if (typeof(window) !== "undefined") {
    window.ngadmin = window.ngadmin || {};
    window.ngadmin.Application = Application;
}

export default Application;
