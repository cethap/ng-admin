import View from "./View";

class MenuView extends View {
    constructor(entity) {
        super(entity);
        this._type = 'MenuView';
        this._icon = null;
    }

    get icon() {
        if (this._icon === null) {
            return '<span class="glyphicon glyphicon-list"></span>';
        }

        return this._icon;
    }

    set icon(icon) {
        this._icon = icon;
    }
}

export default MenuView;
