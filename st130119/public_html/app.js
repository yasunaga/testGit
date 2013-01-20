/**
 * app.js
 */

Ext.setup({
/*
    onReady: function () {

        var coll = new Ext.util.MixedCollection();
        var html = [];

        for (key in Ext.feature.has) {
            coll.add(key, Ext.feature.has[key]);
            var tmp = key+':'+coll.get(key);
            html.push(tmp);
        }

        var panel = Ext.create('Ext.Panel', {
            html: html.join('<br />')
        });

        Ext.Viewport.add(panel);
    }
*/
/*
    onReady: function() {
        var el = Ext.get('target'),
        f = true;
        el.on('tap', function(e, t){
            var cl = f ? 'red': 'white';
            el.setStyle('background-color', cl);
            f = !f;
        });
    } 
*/
/*
    onReady: function() {
        Ext.get('colors').on('tap', function(e,t){
            Ext.fly('white').setStyle('background-color', t.id);
            Ext.fly('white').setHtml(t.id + 'をクリックしたべ');
        });
    } 
*/
/*
    onReady: function() {
        Ext.Viewport.add({
            items:[{
                xtype: 'toolbar',
                items: [{
                    xtype: 'button',
                    itemId: 'one',
                    text: 'One',
                    listeners: {
                        tap: function() {
                            Ext.getCmp('main').setHtml('One');
                        }
                    }
                }, {
                    xtype: 'button',
                    id: 'two', // getCmpで取り出せるようにidを指定
                    text: 'Two'
                }, {
                    xtype: 'button',
                    itemId: 'three',
                    text: 'Three'
                }],
                control: {
                    'button#three': {
                        tap: function() {
                            Ext.getCmp('main').setHtml('Three');
                        }
                    }
                }
            },{
                id: 'main',
                html: 'Hello'
            }]
        });
        var two = Ext.getCmp('two').on('tap', function () {
            Ext.getCmp('main').setHtml('Two');
        });
    }
*/
/*
    onReady: function() {
        Ext.Viewport.add({
            items: [{
                xtype: 'titlebar',
                title: 'Model & Store'
            },{
                id: 'main'
            }]
        });

        Ext.define('Product', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'productSku',
                    {name: 'price', type: 'int'}, 
                    {name: 'expires', type: 'date'}
                ],
                proxy: {
                    type: 'ajax',
                    url: 'products.json',
                    reader: {
                        type: 'json'
                    }
                }
            }
        });

        var myStore = Ext.create('Ext.data.Store', {
            model: 'Product'
        });

        myStore.load({
            callback: function(records, operation, success) {
                var html = '';
                rec = myStore.getAt(0);
                html += rec.get('productSku') + '<br />';
                html += rec.get('price') + '<br />';
                Ext.fly('main').setHtml(html);
            }
        });
    }
*/
/*
    onReady: function () {
        Ext.Viewport.add({
            xtype: 'tabpanel',
            tabBarPosition: 'bottom',
            items: [{
                title: 'ホーム',
                iconCls: 'home',
                html: 'Hello World'
            }, {
                title: 'ブログ',
                iconCls: 'star',
                html: 'Blog List'
            }, {
                title: 'お問い合わせ',
                iconCls: 'user',
                html: 'Contact form'
            }]
        });
    }
*/
/*
    onReady: function () {

        // ブログのデータを取ってくるストア
        var store = Ext.create('Ext.data.TreeStore', {

            fields: [
                'title', 'link', 'author', 'contentSnippet', 'content',
                {name: 'leaf', defaultValue: true}
            ],

            root: {
                leaf: false
            },

            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });

        Ext.Viewport.add({
            xtype: 'tabpanel',
            tabBarPosition: 'bottom',
            items: [{
                title: 'ホーム',
                iconCls: 'home',
                html: 'Hello World'
            }, {
                xtype: 'nestedlist',
                title: 'ブログ',
                iconCls: 'star',
                displayField: 'title',  // リストに表示するフィールド

                // 前に定義したストア
                store: store,

                // 詳細を表示するパネル
                detailCard: {
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        // 詳細パネルを取得してコンテンツをセットする
                        this.getDetailCard().setHtml(post.get('content'));
                    }
                }
            }, {
                title: 'お問い合わせ',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',

                items: [{
                    xtype: 'fieldset',
                    instructions: '(メールアドレスの記入は任意です)',
                    items: [{
                        xtype: 'textfield',
                        label: 'お名前'
                    },{
                        xtype: 'emailfield',
                        label: 'メールアドレス'
                    },{
                        xtype: 'textareafield',
                        label: 'メッセージ'
                    }]
                },{
                    xtype: 'button',
                    text: '送信',
                    ui: 'confirm',
                    handler: function() {
                        this.up('formpanel').submit();
                    }
                }]
            }]
        });
    }
*/
    onReady: function() {
/*
        var t = new Ext.Template(
            '<div id="{id}">',
                '<span class="{cls}">{name:trim} {value:ellipsis(16)}</span>',
            '</div>',
            {compile: true}
        );
        var el = t.append('emptyDiv', {
            id: Ext.id(), 
            cls: 'myclass', 
            name: '    名前は    ', 
            value: '寿限無寿限無五劫の擦り切れ海砂利水魚の水行末雲来末風来末'
        }, true);
*/
/*
        var tpl = new Ext.XTemplate(
            '<ul>',
            '<tpl for="oslist">',
                '<li>{#}. {name}</li>',
            '</tpl>',
            '</ul>'
        );
*/
        var tpl = Ext.XTemplate.from('tplOs');
        tpl.overwrite(document.body, {
            oslist: [
                { name: 'Mac OS X' },
                { name: 'Windows 7' },
                { name: 'Windows Vista' },
                { name: 'Windows XP' }
            ]
        });
    }

});
