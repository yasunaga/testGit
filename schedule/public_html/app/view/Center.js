/**
 * 週表示
 */
Ext.define('ScheduleApp.view.Center', {
    extend: 'Ext.panel.Panel',
    xtype: 'centerpanel',
    layout: 'card',
    activeItem: 0,
    boder: false,
    items: [{
        xtype: 'weekpanel'
    }, {
        xtype: 'daypanel'
    }, {
        xtype: 'monthpanel'
    }]
});
