Ext.define('ScheduleApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'headerpanel',
        height: 30
    },{
        region: 'west',
        xtype: 'userlistpanel',
        width: 250
    },{
        region: 'center',
        xtype: 'centerpanel',
        id: 'centerpanel'
    }]
});
