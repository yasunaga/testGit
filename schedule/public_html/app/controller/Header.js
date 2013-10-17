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
    prevScope: undefined,
    init: function () {
        var me = this;
        me.getScope();
        me.setCalendar();

        me.control({
            'headerpanel': {
                changeView: me.onChangeView,
                next: me.onNext,
                prev: me.onPrev,
                today: me.onToday
            }
        });
    },
    getScope: function () {
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
    },
    setCalendar: function () {
        console.log('setCalendar');
        var me = this;
        if (me.prevScope == me.viewScope) {
            Ext.getCmp(me.prevScope+'-btn').toggle(true);
        }
//        me.getController('Center').onDisplay(me.viewScope);
        me.getCenter().fireEvent('display', me.viewScope);
        me.prevScope = me.viewScope;
    },
    onChangeView: function (mode) {
        var me = this;
        switch (mode) {
        case 'day':
            me.viewScope = 'day';
            me.setCalendar();
            break;
        case 'week':
            me.viewScope = 'week';
            me.setCalendar();
            break;
        case 'month':
            me.viewScope = 'month';
            me.setCalendar();
            break;
        }
    },
    onNext: function () {
        var me = this;
        switch (me.viewScope) {
        case 'day':
            break;
        case 'week':
            me.getCenter().fireEvent('next', me.viewScope);
            break;
        case 'month':
            break;
        }
    },
    onPrev: function () {
        var me = this;
        switch (me.viewScope) {
        case 'day':
            break;
        case 'week':
            me.getCenter().fireEvent('prev', me.viewScope);
            break;
        case 'month':
            break;
        }
    },
    onToday: function () {
        var me = this;
        switch (me.viewScope) {
        case 'day':
            break;
        case 'week':
            me.getCenter().fireEvent('today', me.viewScope);
            break;
        case 'month':
            break;
        }
    }
});
