/**
 * 日コントローラ
 */
Ext.define('ScheduleApp.controller.Day', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'day',
        selector: 'daypanel'
    }],
    init: function () {
        console.log('DayController#init()');
        var me = this;
        me.getCurrentDay();
        me.control({
            'daypanel': {
                'render': me.onRender
            }
        });
    },
    currentDay: null,
    getCurrentDay: function (dt) {

        if (dt === undefined) {
            dt = new Date();
        }

        var me = this;
        me.currentDay = Ext.Date.format(dt, 'Y-m-d');

    },
    onRender: function () {
        var me = this;
        me.getCurrentDay();
        me.getDay().header.setTitle(me.currentDay);
    }
});

