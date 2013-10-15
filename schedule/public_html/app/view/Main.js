Ext.define('ScheduleApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'ScheduleApp.view.Week',
        'ScheduleApp.view.UserList',
        'ScheduleApp.view.Header'
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
        xtype: 'weekpanel'
    }]
});
