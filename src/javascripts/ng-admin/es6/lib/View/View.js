import Entry from "../Entry";

class View {
    constructor(entity) {
        this.entity = entity;
        this.title = null;

        this._enabled = true;
        this._fields = [];
        this._type = null;
    }

    get enabled() {
        return this._enabled;
    }

    disable() {
        this._enabled = false;
    }

    enable() {
        this._enabled = true;
    }

    get fields() {
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
