Ext.define('EX.controller.phone.Users', {
    extend: 'EX.controller.Users',

    config: {
        refs: {
            nav: 'navigationview'
        }
    },

    onItemTap: function (list, index, target, record, e, eOpts) {
        var me = this,
            edit = Ext.widget('useredit');

        edit.setRecord(record);
        me.getNav().push(edit);
    },

    onAfterSave: function () {
        this.getNav().pop();
    },

    onAfterDelete: function(){
        this.getNav().pop();
    },

    onAddTap: function(button){
        var me = this,
            edit = Ext.widget('useredit');

        me.getNav().push(edit);
    }
});
