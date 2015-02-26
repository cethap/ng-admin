import Field from "./Field";

class ReferenceManyField extends Field {
    constructor(name) {
        super(name);
        this._type = 'reference_many';
    }
}

window.ngadmin = window.ngadmin || {};
window.ngadmin.ReferenceManyField = ReferenceManyField;

export default ReferenceManyField;
