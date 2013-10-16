/**
 * 週表示
 */
Ext.define('ScheduleApp.view.Center', {
    extend: 'Ext.panel.Panel',
    xtype: 'centerpanel',
    layout: 'fit',
    activeItem: 0,
    items: [{
        border: false,
        html: 'ベースです'
    }]
});
