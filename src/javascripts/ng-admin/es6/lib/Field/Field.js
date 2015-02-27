import stringUtils from "../Utils/stringUtils";

class Field {
    constructor(name) {
        this._name = name;
        this._detailLink = null;
        this._type = "string";
        this._order = 0;
        this._label = null;

        this.identifier = false;
        this.validation = {};
    }

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

    /** @deprecated */
    type() {
        if (arguments.length) {
            this._type = arguments[0];
            return this;
        }

        return this._type;
    }

    /** @deprecated */
    name() {
        if (arguments.length) {
            this._name = arguments[0];
            return this;
        }

        return this._name;
    }


    /** @deprecated */
    order() {
        if (arguments.length) {
            this._order = arguments[0];
            return this;
        }

        return this._order;
    }

    isDetailLink() {
        if (arguments.length) {
            this._detailLink = arguments[0];
            return this;
        }

        if (this._detailLink === null) {
            return this._name === 'id';
        }

        return this._detailLink;
    }

    set detailLink(isDetailLink) {
        return this._detailLink = isDetailLink;
    }
}

if (typeof(window) !== 'undefined') {
    window.ngadmin = window.ngadmin || {};
    window.ngadmin.Field = Field;
}

export default Field;
