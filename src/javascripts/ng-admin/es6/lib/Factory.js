import Entity from "./Entity/Entity";

class Factory {
    constructor() {
        this._fieldTypes = [];
    }

    entity(name) {
        return new Entity(name);
    }

    field(name, type) {
        var type = type || "string";
        if (!(type in this._fieldTypes)) {
            throw new Error(`Unknown field type "${type}".`);
        }

        return new this._fieldTypes[type](name);
    }

    registerFieldType(name, constructor) {
        this._fieldTypes[name] = constructor;
    }
}

export default Factory;
