var assert = require('chai').assert;

import Field from "../../../lib/Field/Field";

describe('Field', function() {
    describe('detailLink', function() {
        it('should be false if not specified', function() {
            var field = new Field('foo');
            assert.equal(false, field.detailLink);
        });

        it('should be true if not specified and if name is "id"', function() {
            var field = new Field('id');
            assert.equal(true, field.detailLink);
        });

        it('should return given value if already set, whatever name may be', function() {
            var field = new Field('id');
            field.detailLink = false;

            assert.equal(false, field.detailLink);
        });
    });

    describe('label', function() {
        it('should be based on name if non has been provided', function() {
            var field = new Field('first_name');
            assert.equal('First Name', field.label);
        });

        it('should be given value if already provided', function() {
            var field = new Field('first_name');
                field.label = 'Prénom';
            assert.equal('Prénom', field.label);
        });
    });
});
