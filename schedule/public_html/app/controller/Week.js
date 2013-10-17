/**
 * 週コントローラ
 */
Ext.define('ScheduleApp.controller.Week', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'week',
        selector: 'weekpanel'
    }],
    currentWeek: {},
    currentDay: undefined,
    init: function () {
        console.log('WeekController#init()');
        var me = this;
        // カレント週
        me.getCurrentWeekSpan();
        me.currentDay = new Date();

        me.control({
            'weekpanel': {
                'render': me.onRender,
                'next': me.onNext,
                'prev': me.onPrev,
                'today': me.onToday
            }
        });
    },
    getCurrentWeekSpan: function (dt) {

        if (dt === undefined) {
            dt = new Date();
        }

        var me = this,
            sdt = null,
            edt = null,
            w = Ext.Date.format(dt, 'w');

        me.currentDay = dt;

        if (w) {
            sdt = Ext.Date.add(dt, Ext.Date.DAY, -w);
        } else {
            sdt = dt;
        }

        if (w == 6) {
            edt = dt;
        } else {
            edt = Ext.Date.add(dt, Ext.Date.DAY, 6-w)
        }

        me.currentWeek = {
            start: Ext.Date.format(sdt, 'Y-m-d'),
            end:   Ext.Date.format(edt, 'Y-m-d')
        };
    },
    onRender: function (dt) {
        console.log('Week::onRender');
        var me = this;
        if (dt === undefined) {
            dt = new Date();
        }
        me.getCurrentWeekSpan(dt);
        me.getWeek().header.setTitle(me.currentWeek.start+'〜'+me.currentWeek.end);
    },
    onNext: function () {
        var me = this,
            dt = Ext.Date.add(me.currentDay, Ext.Date.DAY, 7);
        me.onRender(dt);
    },
    onPrev: function () {
        var me = this,
            dt = Ext.Date.add(me.currentDay, Ext.Date.DAY, -7);
        me.onRender(dt);
    },
    onToday: function () {
        var me = this;
        me.onRender();
    }
});
