/**
 * ユーザー一覧コントローラ
 */
Ext.define('ScheduleApp.controller.UserList', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'userlist',
        selector: 'userlistpanel'
    }],
    init: function () {
        console.log('UserListController#init()');
    }
});
