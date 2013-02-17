Ext.define('EX.controller.tablet.Users', {
    extend: 'EX.controller.Users',

    launch: function () {
        this.setEditDisabled(true);
    },

    setEditDisabled: function(value){
        var me = this,
            edit = me.getEdit();

        edit.setDisabled(value);
        edit.down('button#deleteButton').setDisabled(value);
        edit.down('button#saveButton').setDisabled(value);
    },

    onItemTap: function (list, index, target, record, e, eOpts) {
        var me = this;

        me.setEditDisabled(false);
        me.getEdit().setRecord(record);
    },

    onAfterSave: function(){
        this.setEditDisabled(true);
    },

    onAfterDelete: function(){
        var me = this;

        me.getEdit().reset();
        me.setEditDisabled(true);
    },

    onAddTap: function(button){
        var me = this,
            edit = me.getEdit();

        me.setEditDisabled(false);
        edit.setRecord(null);
        edit.reset();
    }
});
