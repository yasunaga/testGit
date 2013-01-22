/**
 * store/Users.js
 */

Ext.define('EX.store.Users', {
    extend: 'Ext.data.Store',
    model: 'EX.model.User',
    config: {
        data: [{
            id: 1, name: 'トーマス', email: 'thomas@sodo.com', bio: 'いつもげんきなタンクきかんしゃ'
        }, {
            id: 2, name: 'エドワード', email: 'edword@sodo.com', bio: 'だれにでもしんせつなきかんしゃ'
        }]
    }

});
