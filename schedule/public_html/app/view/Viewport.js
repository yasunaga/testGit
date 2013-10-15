Ext.define('ScheduleApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'ScheduleApp.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
