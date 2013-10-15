/**
 * 週コントローラ
 */
Ext.define('ScheduleApp.controller.Week', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'week',
        selector: 'weekpanel'
    }],
    init: function () {
        console.log('WeekController#init()');
    }
});
