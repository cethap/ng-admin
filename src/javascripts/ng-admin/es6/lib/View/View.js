import Entry from "../Entry";

class View {
    constructor(entity) {
        this.entity = entity;
        this._title = null;

        this._enabled = true;
        this._fields = [];
        this._type = null;
        this._name = null; // Still used?
    }

    get enabled() {
        return this._enabled;
    }

    /** @deprecated */
    title() {
        if (arguments.length) {
            this._title = arguments[0];
            return this;
        }

        return this._title;
    }

    /** @deprecated */
    name() {
        if (arguments.length) {
            this._name = arguments[0];
            return this;
        }

        return this._name;
    }

    disable() {
        this._enabled = false;
    }

    enable() {
        this._enabled = true;
    }

    /**
     * @deprecated Use getter "enabled" instead
     */
    isEnabled() {
        return this._enabled;
    }

    /**
     * @deprecated Use getter "entity" instead
     */
    getEntity() {
        return this.entity;
    }

    fields() {
        if (arguments.length) {
            this._fields = arguments[0];
            return this;
        }

        return this._fields;
    }

    get type() {
        return this._type;
    }

    getReferences() {
        return this._fields.filter(field => field.type === 'reference' || field.type === 'reference_many');
    }

    mapEntry(restEntry) {
        return new Entry.mapFromRest(this.entity, this._fields, restEntry);
    }

    mapEntries(restEntries) {
        return restEntries.map(e => this.mapEntry(e));
    }
}

export default View;
