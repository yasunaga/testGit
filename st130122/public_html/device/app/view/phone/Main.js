Ext.define('EX.view.phone.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mainview',

    config: {
        items: [
            {
                title: 'User List',
                xtype: 'userlist'
            }
        ]
    }
});
