import stringUtils from "../Utils/stringUtils";

import DashboardView from '../View/DashboardView';
import MenuView from '../View/MenuView';
import ListView from '../View/ListView';

class Entity {
    constructor(name) {
        this._name = name;
        this.baseApiUrl = null;
        this._label = null;

        this._initViews();
    }

    get views() {
        return this._views;
    }

    /** @deprecated */
    label() {
        if (arguments.length) {
            this._label = arguments[0];
            return this;
        }

        if (this._label === null) {
            return stringUtils.camelCase(this._name);
        }

        return this._label;
    }

    /**
     * @deprecated
     */
    name() {
        if (arguments.length) {
            this._name = arguments[0];
            return this;
        }

        return this._name;
    }

    /**
     * @deprecated Use .views["MenuView"] instead
     */
    menuView() {
        return this._views["MenuView"];
    }

    /**
     * @deprecated Use .views["DashboardView"] instead
     */
    dashboardView() {
        return this._views["DashboardView"];
    }

    /**
     * @deprecated Use .views["ListView"] instead
     */
    listView() {
        return this._views["ListView"];
    }

    /**
     * @deprecated Use .views["CreationView"] instead
     */
    creationView() {
        return this._views["CreationView"];
    }

    /**
     * @deprecated Use .views["EditionView"] instead
     */
    editionView() {
        return this._views["EditionView"];
    }

    _initViews() {
        this._views = {
            "DashboardView": new DashboardView(this),
            "MenuView": new MenuView(this),
            "ListView": new ListView(this)
        };
    }
}

if (typeof(window) !== 'undefined') {
    window.ngadmin = window.ngadmin || {};
    window.ngadmin.Entity = Entity;
}

export default Entity;
