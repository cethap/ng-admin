class Entry {
    constructor(entityName, values, identifierValue) {
        this._entityName = entityName;
        this._values = values;
        this._identifierValue = identifierValue;
    }

    get values() {
        return this._values;
    }

    get entityName() {
        return this._entityName;
    }

    get identifierValue() {
        return this._identifierValue;
    }

    static mapFromRest(entity, fields, restEntry) {
        if (!restEntry) {
            return new Entry(entity.name);
        }

        var identifier = null;
        var identifierFieldName = fields.filter(f => f.identifier);
            identifierFieldName = identifierFieldName.length ? identifierFieldName[0].name : null;

        var values = {};
        for (let i = 0, c = fields.length ; i < c ; i++) {
            let field = fields[i];

            if (!(field.name in restEntry)) {
                continue;
            }

            values[field.name] = restEntry[field.name];
            if (identifierFieldName === field.name) {
                identifier = restEntry[field.name];
            }
        }

        return new Entry(entity.name, values, identifier);
    }
}

export default Entry;
