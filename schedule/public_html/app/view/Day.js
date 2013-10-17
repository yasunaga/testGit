/**
 * 日表示
 */
Ext.define('ScheduleApp.view.Day', {
    extend: 'Ext.panel.Panel',
    xtype: 'daypanel',
    layout: 'fit',
    itemId: 'card-day',
//    activeItem: 0,
    border: false,
    title: '今日',
    html: '今日です'
});

