/**
 * view/Main.js
 */

Ext.define('EX.view.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mainview',
    config: {
        title: 'Sample',
        items: [{
            title: 'User List',
            xtype: 'userlist'
        }]
    }
});
