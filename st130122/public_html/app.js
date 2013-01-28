/**
 * app.js
 */
Ext.application({
    name: 'EX',
    controllers: ['Users'],
    models: ['User'],
    stores: ['Users'],
    views: ['Main', 'List', 'Edit'],
    launch: function () {
        Ext.create('EX.view.Main', {fullscreen: true});
    }
});
