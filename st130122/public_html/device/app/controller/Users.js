/**
 * controller/Users.js
 */

Ext.define('EX.controller.Users', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            edit: 'useredit',
            list: 'userlist'
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

    onItemTap: Ext.emptyFn,

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
        store.sync();
        me.getNav().pop();
        me.onAfterSave();
    },
    onDeleteTap: function (button) {
        var me = this,
            form = button.up('formpanel'),
            rec = form.getRecord(),
            store = Ext.getStore('Users');

        store.remove(rec);
        store.sync();
        me.onAfterDelete();
    },
    onAfterSave: Ext.emptyFn,
    onAfterDelete: Ext.emptyFn

});
