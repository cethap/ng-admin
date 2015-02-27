import Field from "./Field";

class ReferencedList extends Field {
    constructor(name) {
        super(name);
        this._type = 'referenced_list';
    }
}

export default ReferencedList;
