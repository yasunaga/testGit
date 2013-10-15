/**
 * ヘッダー表示
 */
Ext.define('ScheduleApp.view.Header', {
    //extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerpanel',
    //xtype: 'headerpanel',
    layout: 'hbox',
    boder: false,
    id: 'head',
    items: [{
        border: false,
        html: {
            tag: 'h1',
            html: 'ScheduleApp',
            style: {
                'font-size': '14px',
                margin: '5px'
            }
        },
        flex: 1
    }, {
        border: false,
        id: 'card-btn',
        style: {
            'text-align': 'center'
        },
        items: [{
            xtype: 'button',
            text: '&lt;',
            action: 'prev',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'prev-btn'
        }, {
            text: 'Today',
            xtype: 'button',
            action: 'today',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'today-btn'
        }, {
            xtype: 'button',
            text: '&gt;',
            action: 'next',
            style: {
                margin: '3px 0 0 0'
            },
            id: 'next-btn'
        }],
        flex: 2
    }, {
        border: false,
        items: [{
            xtype: 'button',
            text: 'DAY',
            action: 'day',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'day-btn'
        }, {
            xtype: 'button',
            text: 'WEEK',
            action: 'week',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'week-btn'
        }, {
            xtype: 'button',
            text: 'MONTH',
            action: 'month',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 0 0 0'
            },
            id: 'month-btn'
        }],
        flex: 1
    }]
});
