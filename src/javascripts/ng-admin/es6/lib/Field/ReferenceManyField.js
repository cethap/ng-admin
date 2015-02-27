import Field from "./Field";

class ReferenceManyField extends Field {
    constructor(name) {
        super(name);
        this._type = 'reference_many';
    }
}

export default ReferenceManyField;
