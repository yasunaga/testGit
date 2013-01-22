/**
 * view/Edit.js
 */

Ext.define('EX.view.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.useredit',
    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: '名前'
            }, {
                xtype: 'textfield',
                name: 'email',
                label: 'メール'
            }, {
                xtype: 'textareafield',
                name: 'bio',
                label: '略歴'
            }]
        }]
    }
});
