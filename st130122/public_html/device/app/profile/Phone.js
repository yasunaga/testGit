
Ext.define('EX.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        views: ['Main'],
        name: 'Phone'
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.create('EX.view.phone.Main', {fullscreen: true});
    }
});
