Ext.define('EX.view.CommentList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.commentlist',
    config: {
        itemTpl: [
            '<div>{comment}</div>'
        ]
    }
});
