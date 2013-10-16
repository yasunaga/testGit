/**
 * ヘッダーコントローラ
 */
Ext.define('ScheduleApp.controller.Header', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'header',
        selector: 'headerpanel'
    }, {
        ref: 'center',
        selector: 'centerpanel'
    }],
    // 表示スコープ
    viewScope: 'week',
    init: function () {
        var me = this;
//        me.getScore();
//        me.setCalendar();
    },
    getScore: function () {
/*
        var me = this;
        if (Ext.getCmp('day-btn').pressed) {
            me.viewScope = 'day';
        } else if (Ext.getCmp('week-btn').pressed) {
            me.viewScope = 'week';
        } else if (Ext.getCmp('month-btn').pressed) {
            me.viewScope = 'month';
        } else {
            Ext.getCmp('week-btn').toggle(true);
            me.viewScope = 'week';
        }
*/
    },
    setCalendar: function () {
/*
        var me = this;
        switch (me.viewScope) {
        case 'week':
            me.getController('Week').onDisplay();
            break;
        }
*/
    }
});
