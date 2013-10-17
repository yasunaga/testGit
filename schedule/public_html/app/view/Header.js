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
            id: 'prev-btn',
            handler: function (b) {
                b.up('headerpanel').firePrev();
            }
        }, {
            text: 'Today',
            xtype: 'button',
            action: 'today',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'today-btn',
            handler: function (b) {
                b.up('headerpanel').fireToday();
            }
        }, {
            xtype: 'button',
            text: '&gt;',
            action: 'next',
            style: {
                margin: '3px 0 0 0'
            },
            id: 'next-btn',
            handler: function (b) {
                b.up('headerpanel').fireNext();
            }
        }],
        flex: 2
    }, {
        border: false,
        id: 'scope-btn',
        style: {
            'text-align': 'right'
        },
        items: [{
            xtype: 'button',
            text: 'DAY',
            action: 'day',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'day-btn',
            handler: function (b) {
                b.up('headerpanel').fireToggle('day');
            }
        }, {
            xtype: 'button',
            text: 'WEEK',
            action: 'week',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 5px 0 0'
            },
            id: 'week-btn',
            handler: function (b) {
                b.up('headerpanel').fireToggle('week');
            }
        }, {
            xtype: 'button',
            text: 'MONTH',
            action: 'month',
            toggleGroup: 'cal-scope',
            style: {
                margin: '3px 0 0 0'
            },
            id: 'month-btn',
            handler: function (b) {
                b.up('headerpanel').fireToggle('month');
            }
        }],
        flex: 1
    }],
    fireToggle: function (mode) {
        var me = this;
        console.log('fireToggle');
        me.fireEvent('changeView', mode);
    },
    fireNext: function () {
        var me = this;
        console.log('fireNext');
        me.fireEvent('next');
    },
    firePrev: function () {
        var me = this;
        console.log('firePrev');
        me.fireEvent('prev');
    },
    fireToday: function () {
        var me = this;
        console.log('fireToday');
        me.fireEvent('today');
    }
});
