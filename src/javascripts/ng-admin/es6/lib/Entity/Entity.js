import stringUtils from "../Utils/stringUtils";

import DashboardView from '../View/DashboardView';
import MenuView from '../View/MenuView';
import ListView from '../View/ListView';

class Entity {
    constructor(name) {
        this.name = name;
        this.baseApiUrl = null;
        this._label = null;

        this._initViews();
    }

    get views() {
        return this._views;
    }

    get label() {
        if (this._label === null) {
            return stringUtils.camelCase(this.name);
        }

        return this._label;
    }

    set label(label) {
        this._label = label;
    }

    _initViews() {
        this._views = {
            "DashboardView": new DashboardView(this),
            "MenuView": new MenuView(this),
            "ListView": new ListView(this)
        };
    }
}

export default Entity;
