import Application from './Application';
import Entity from './Entity/Entity';
import Field from './Field/Field';

define(function() {

    var app = new Application('ng-admin backend demo');
    app.baseApiUrl = 'http://localhost:3000/';

    let post = new Entity('posts');

    let id = new Field('id');
    id.identifier = true;

    let title = new Field('title');
    title.validation = {
        required: true,
        max_length: 200
    };

    post.views['DashboardView'].fields.push(id);
    post.views['DashboardView'].fields.push(title);

    app.entities.push(post);

    return app;
});
