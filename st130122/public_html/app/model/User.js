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
        ],
        proxy: {
            type: 'ajax',
//            url: 'data/user.php',
            api: {
                create: 'data/adduser.php',
                read: 'data/user.php',
                update: 'data/updateuser.php',
                destroy: 'data/deleteuser.php',
            },
            reader: {
                type: 'json',
                rootProperty: 'data',
                successProperty: 'success'
            },
            writer: {
                type: 'json',
                encode: true
            }
        },
        hasMany: {model: 'EX.model.Comment', name: 'comments'}
    }
});

