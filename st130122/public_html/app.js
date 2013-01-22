/**
 * app.js
 */

Ext.application({
    name: 'EX',
    models: ['User'],
    stores: ['Users'],
    views: ['Main', 'List', 'Edit'],
    launch: function () {
        Ext.create('EX.view.Main', {fullscreen: true});
    }
});
