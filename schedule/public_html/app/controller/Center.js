/**
 * センターコントローラ
 */
Ext.define('ScheduleApp.controller.Center', {
    extend: 'Ext.app.Controller',
    controllers: ['Week', 'Day', 'Month'],
    views: ['Week', 'Day', 'Month'],
    refs: [{
        ref: 'center',
        selector: 'centerpanel',
    }, {
        ref: 'week',
        selector: 'weekpanel'
    }, {
        ref: 'day',
        selector: 'daypanel'
    }, {
        ref: 'month',
        selector: 'monthpanel'
    }],
    init: function () {
        console.log('CenterController#init()');
        var me = this;
        me.control({
            'centerpanel': {
                display: me.onDisplay,
                next: me.onNext,
                prev: me.onPrev,
                today: me.onToday
            }
        });
    },
    onDisplay: function (mode) {
        console.log('Center::onDisplay');
        var me = this,
            center = me.getCenter();

        switch (mode) {
        case 'week':
            center.getLayout().setActiveItem('card-week');
            //me.getController('Week').onRender();
            me.getWeek().fireEvent('render');
            break;
        case 'day':
            center.getLayout().setActiveItem('card-day');
            //me.getController('Day').onRender();
            me.getDay().fireEvent('render');
            break;
        case 'month':
            center.getLayout().setActiveItem('card-month');
            //me.getController('Month').onRender();
            me.getMonth().fireEvent('render');
            break;
        }
    },
    onNext: function(mode) {
        var me = this;
        switch (mode) {
        case 'day':
            break;
        case 'week':
            me.getWeek().fireEvent('next');
            break;
        case 'month':
            break;
        }
    },
    onPrev: function(mode) {
        var me = this;
        switch (mode) {
        case 'day':
            break;
        case 'week':
            me.getWeek().fireEvent('prev');
            break;
        case 'month':
            break;
        }
    },
    onToday: function(mode) {
        var me = this;
        switch (mode) {
        case 'day':
            break;
        case 'week':
            me.getWeek().fireEvent('today');
            break;
        case 'month':
            break;
        }
    }
});
