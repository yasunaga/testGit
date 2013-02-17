/**
 * model/Comment.js
 */

Ext.define('EX.model.Comment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'user_id',
            'comment'
        ],
        proxy: {
            type: 'ajax',
            url: 'data/comment.php',
            reader: {
                type: 'json',
                rootProperty: 'data',
                successProperty: 'success'
            }
        }
    }
});
