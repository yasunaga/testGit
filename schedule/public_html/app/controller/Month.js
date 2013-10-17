/**
 * 月コントローラ
 */
Ext.define('ScheduleApp.controller.Month', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'month',
        selector: 'monthpanel'
    }],
    init: function () {
        console.log('MonthController#init()');
        var me = this;
        me.getCurrentMonth();
        me.control({
            'monthpanel': {
                'render': me.onRender
            }
        });
    },
    currentMonth: null,
    getCurrentMonth: function (dt) {

        if (dt === undefined) {
            dt = new Date();
        }

        var me = this;
        me.currentMonth = Ext.Date.format(dt, 'Y-m');
   },
    onRender: function () {
        var me = this;
        me.getCurrentMonth();
        me.getMonth().header.setTitle(me.currentMonth);
    }
});


