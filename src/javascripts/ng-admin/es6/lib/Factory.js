import Entity from "./Entity/Entity";
import Field from "./Field/Field";
import ReferenceField from "./Field/ReferenceField";
import ReferenceManyField from "./Field/ReferenceManyField";
import ReferencedListField from "./Field/ReferencedList";

class Factory {
    constructor() {
        this._fieldTypes = [];
        this._init();
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

    _init() {
        this.registerFieldType('boolean', Field);
        this.registerFieldType('choice', Field);
        this.registerFieldType('choices', Field);
        this.registerFieldType('date', Field);
        this.registerFieldType('email', Field);
        this.registerFieldType('file', Field);
        this.registerFieldType('json', Field);
        this.registerFieldType('number', Field);
        this.registerFieldType('password', Field);
        this.registerFieldType('reference', ReferenceField);
        this.registerFieldType('reference_many', ReferenceManyField);
        this.registerFieldType('referenced_list', ReferencedListField);
        this.registerFieldType('string', Field);
        this.registerFieldType('template', Field);
        this.registerFieldType('text', Field);
        this.registerFieldType('wysiwyg', Field);
    }
}

export default Factory;
