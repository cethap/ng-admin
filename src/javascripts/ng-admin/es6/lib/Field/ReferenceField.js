import Field from "./Field";
import ListView from "../View/ListView";

class ReferenceField extends Field {
    constructor(name, referencedEntity) {
        super(name);
        this._type = 'reference';
        this._referencedView = new ListView(referencedEntity);
    }

    get referencedView() {
        return this._referencedView;
    }
}

window.ngadmin = window.ngadmin || {};
window.ngadmin.ReferenceField = ReferenceField;

export default ReferenceField;
