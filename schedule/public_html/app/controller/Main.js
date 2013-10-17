Ext.define('ScheduleApp.controller.Main', {
    extend: 'Ext.app.Controller',
    controllers: [
        // TODO: add controllers here
        'Center', 'Header', 'UserList'
    ],
    views: [
        // TODO: add views here
        'Center', 'Header', 'UserList'
    ],
    init: function () {
        console.log('Main#init()');
        var me = this;
    }
});
