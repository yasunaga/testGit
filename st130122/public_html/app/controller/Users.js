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
            },
            'button#addButton': {
                tap: 'onAddTap'
            }
        }
    },

    onItemTap: function (list, index, target, record, e, eopts) {
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
        if (rec){
            rec.set(values);
        } else {
            rec = Ext.create('EX.model.User');
            rec.set(values);
            store.add(rec);
        }
        me.getNav().pop();
    },
    onDeleteTap: function (button) {
        var me = this,
            form = button.up('formpanel'),
            rec = form.getRecord(),
            store = Ext.getStore('Users');

        store.remove(rec);
        me.getNav().pop();
    },
    onAddTap: function (button) {
        var me = this,
            edit = Ext.widget('useredit');
        me.getNav().push(edit);
    }

});
