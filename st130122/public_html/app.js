/**
 * app.js
 */
Ext.application({
    name: 'EX',
    controllers: ['Users'],
    models: ['User', 'Comment'],
    stores: ['Users'],
    views: ['Main', 'List', 'Edit', 'CommentList'],
    launch: function () {
        Ext.create('EX.view.Main', {fullscreen: true});
    }
});
