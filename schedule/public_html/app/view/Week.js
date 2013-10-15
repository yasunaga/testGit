/**
 * 週表示
 */
Ext.define('ScheduleApp.view.Week', {
    extend: 'Ext.panel.Panel',
    xtype: 'weekpanel',
    layout: 'card',
    activeItem: 0,
    items: [{
        border: false,
        title: '今週',
        html: '今週です'
    }]
});
