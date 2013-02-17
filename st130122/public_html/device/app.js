/**
 * app.js
 */
Ext.application({
    name: 'EX',
    profiles: ['Phone', 'Tablet'],
//    controllers: ['Users'],
    models: ['User', 'Comment'],
    stores: ['Users'],
    views: ['List', 'Edit'],
    launch: function () {
        //Ext.create('EX.view.Main', {fullscreen: true});
    }
});
