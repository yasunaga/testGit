/**
 * controller/Users.js
 */

Ext.define('EX.controller.Users', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            nav: 'navigationview'
        },

        control: {
            'userlist': {
                itemtap: "onItemTap"
            },
            'button#saveButton': {
                tap: 'onSaveTap'
            },
            'button#deleteButton': {
                tap: 'onDeleteTap'
            }
        }
    },

    onItemTap: function (list, index, target, record, e, eOpts) {
        var me = this,
            edit = Ext.widget('useredit');

        edit.setRecord(record);
        me.getNav().push(edit);
    },

    onSaveTap: function (button) {
        var me = this,
        form = button.up('formpanel'),
        rec = form.getRecord(),
        values = form.getValues(),
        store = Ext.getStore('Users');
        rec.set(values);
        me.getNav().pop();
    },
    onDeleteTap: function (button) {
        var me = this,
        form = button.up('formpanel'),
        rec = form.getRecord(),
        store = Ext.getStore('Users');

        store.remove(rec);
        me.getNav().pop();
    }

});
