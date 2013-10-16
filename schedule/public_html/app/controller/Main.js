Ext.define('ScheduleApp.controller.Main', {
    extend: 'Ext.app.Controller',
    controllers: [
        // TODO: add controllers here
        'Header', 'UserList', 'Center'
    ],
    views: [
        // TODO: add views here
        'Header', 'UserList', 'Center'
    ],
    init: function () {
        console.log('Main#init()');
        var me = this;
    }
});
