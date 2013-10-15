/**
 * ヘッダーコントローラ
 */
Ext.define('ScheduleApp.controller.Header', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'header',
        selector: 'headerpanel'
    }],
    init: function () {
        console.log('HeaderController#init()');
        var header = this.getHeader();
        console.log(header);
        Ext.getCmp('week-btn').toggle(true);
    }
});
