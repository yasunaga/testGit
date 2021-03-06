/**
 * view/List.js
 */

Ext.define('EX.view.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.userlist',
    config: {
        store: 'Users',
        itemTpl: [
            '<div>{name}</div>'
        ],
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                text: '追加',
                itemId: 'addButton'
            }]
        }]
    }
});
