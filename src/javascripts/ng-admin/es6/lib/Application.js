class Application {
    constructor(title, baseApiUrl) {
        this.title = title;
        this.baseApiUrl = baseApiUrl;
        this.layout = false;

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

        var url = this.baseApiUrl + entity.name + (entityId ? '/' + entityId : '');

        // Add baseUrl for relative URL
        if (!/^(?:[a-z]+:)?\/\//.test(url)) {
            url = baseApiUrl + url;
        }

        return url;
    }
}

export default Application;
