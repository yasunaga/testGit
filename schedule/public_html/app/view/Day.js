/**
 * 日表示
 */
Ext.define('ScheduleApp.view.Day', {
    extend: 'Ext.panel.Panel',
    xtype: 'daypanel',
    layout: 'card',
    activeItem: 0,
    items: [{
        border: false,
        title: '今日',
        html: '今日です'
    }]
});

