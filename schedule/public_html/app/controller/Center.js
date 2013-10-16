/**
 * センターコントローラ
 */
Ext.define('ScheduleApp.controller.Center', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'center',
        selector: 'centerpanel'
    }],
    init: function () {
        console.log('CenterController#init()');
    },
    onDisplay: function () {
        console.log('Center::onDisplay');
        var me = this;
    }
});
