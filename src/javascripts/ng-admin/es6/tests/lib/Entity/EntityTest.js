var assert = require('chai').assert;

import Entity from "../../../lib/Entity/Entity";

describe('Entity', function() {
    describe('views', function() {
        it('should create all views when creating new entity', function() {
            var entity = new Entity('post');
            assert.deepEqual([
                'DashboardView',
                'MenuView',
                'ListView'
            ], Object.keys(entity.views));
        });
    });

    describe('label', function() {
        it('should return given label if already set', function() {
            var post = new Entity('post');
            post.label = 'Article';

            assert.equal('Article', post.label);
        });

        it('should return entity name if no label has been set', function() {
            var post = new Entity('post');
            assert.equal('Post', post.label);
        });
    })
});
