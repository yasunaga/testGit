
Ext.define('EX.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        views: ['Main'],
        name: 'Tablet'
    },
    isActive: function () {
        return !Ext.os.is.Phone;
    },
    launch: function () {
        Ext.create('EX.view.tablet.Main', {fullscreen: true});
    }
});
