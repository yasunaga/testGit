/**
 * model/User.js
 */

Ext.define('EX.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'name',
            'email',
            'bio'
        ]
    }
});
