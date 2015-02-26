import stringUtils from "../Utils/stringUtils";

class Field {
    constructor(name) {
        this._name = name;
        this._detailLink = null;
        this._type = "string";

        this.identifier = false;
        this.validation = {};
    }

    get name() {
        return this._name;
    }

    get label() {
        return this._label || stringUtils.camelCase(this.name);
    }

    set label(_label) {
        this._label = _label;
    }

    get type() {
        return this._type;
    }

    get detailLink() {
        if (this._detailLink === null) {
            return this._name === 'id';
        }

        return this._detailLink;
    }

    set detailLink(isDetailLink) {
        return this._detailLink = isDetailLink;
    }
}

export default Field;
