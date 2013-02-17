Ext.define('EX.view.tablet.Main', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sample'
            },
            {
                width: 200,
                docked: 'left',
                xtype: 'userlist'
            },
            {
                xtype: 'useredit'
            }
        ]
    }
});
