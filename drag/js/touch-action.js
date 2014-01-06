$.extend(touchAction = {}, mtiBase, {

    // {{{ props

    /**
     * イベント発生時のポインタと対象エレメントのleft差
     * @type {Numeric}
     */
    _x: 0,

    /**
     * イベント発生時のポインタと対象エレメントのtop差
     * @type {Numeric}
     */
    _y: 0,

    /**
     * イベント対象セレクタ
     * @type {String}
     */
    selector: null,

    /**
     * イベント発火セレクタ
     * @type {String}
     */
    target: null,

   // }}}
   // {{{ init

    /**
     * 初期化メソッド
     */
    init: function () {
        var me = this;

    },

   // }}}
   // {{{ sortable

    /**
     * リストのソートメソッド（現在はtableのみ対応）
     * @param selector {String} 対象リストの親セレクタ
     * @return void
     */
    sortable: function (selector, target) {

        var me = this;
        // バインド設定
        if (me.isSurface()) {
            me.__bindType.mousedown = 'pointerdown';
            me.__bindType.mousemove = 'pointermove';
            me.__bindType.mouseup = 'pointerup';
            me.__bindType.mouseout = 'pointerleave';
        } else if (me.Touch) {
            me.__bindType.mousedown = 'touchstart';
            me.__bindType.mousemove = 'touchmove';
            me.__bindType.mouseup = 'touchend';
            me.__bindType.mouseout = 'touchout';
        }
        $(selector).addClass('mti-sortable');
        me.selector = selector;
        me.target = target;
        // テキスト範囲選択禁止（IE対応）
        $(selector).attr('unselectable', 'on');
        $(selector).css({'-webkit-user-select': 'none'});

        me._sortableSetEvents();

    },

   // }}}
   // {{{ _sortableSetEvents

    /**
     * sortable用イベント設定メソッド
     * @return void
     */
    _sortableSetEvents: function () {

        var me = this;
        $('body').unbind(me.__bindType.mousemove);
        console.log(me.__bindType.mousemove);

        $('body').bind(me.__bindType.mousemove, function  () {
            event.preventDefault();
        });

        $(me.target)
            .bind(me.__bindType.mousedown, function () {
                me.floating(this);
            })
            .bind(me.__bindType.mouseup, function () {
                me.sortend(this);
            });

    },

   // }}}
   // {{{ _sortableUnsetEvents

    /**
     * sortable用イベント設定解除メソッド
     * @return void
     */
    _sortableUnsetEvents: function () {
        var me = this;
        $(me.target)
            .unbind(me.__bindType.mousedown)
            .unbind(me.__bindType.mouseup);
    },

   // }}}
   // {{{ floating

    /**
     * フローティングメソッド
     * @param el {Element} 対象エレメント
     * @return void
     */
    floating: function (el) {

        var me = this;
        me._x= 0;
        me._y= 0;
        if (event.changedTouches === undefined) {
            event.changedTouches = [];
            event.changedTouches.push({
                pageX: event.pageX,
                pageY: event.pageY
            });
        }

        $('.mti-sortable tr').removeClass('mti-floating');
        var widths = [];
        $(el).closest('tr').find('td').each(function (key, val) {
            widths.push($(val).css('width'));
        });
        var trWidth = $(el).closest('tr').css('width');
        console.log(widths);
        $(el).closest('tr').addClass('mti-floating').css({
//        $(me.selector+' tr').addClass('mti-floating').css({
            position: 'fixed',
            display: 'table-row',
            zIndex: '10001',
            width: trWidth,
            top: event.changedTouches[0].pageY -20
//            left: event.changedTouches[0].pageX -20
        });
        $(el).closest('tr').find('td').each(function (key, val) {
            $(val).css({width: widths[key]});
        });

        var offset = $('.mti-floating').offset();
        me._x = event.changedTouches[0].pageX - 20, //parseInt(offset.left);
        me._y = event.changedTouches[0].pageY - 20//parseInt(offset.top);

        $(el).closest('tr').unbind(me.__bindType.mousemove);
        $(el).closest('tr').bind(me.__bindType.mousemove, function () {
            me.move();
        });

        $(el).closest('tr').unbind(me.__bindType.mouseup);
        $(el).closest('tr').bind(me.__bindType.mouseup, function () {
            me.sortend(this);
        });

    },

   // }}}
   // {{{ move

    /**
     * moveイベントハンドラ
     * @return void
     */
    move: function () {
        var me = this;
        if (event.changedTouches === undefined) {
            event.changedTouches = [];
            event.changedTouches.push({
                pageX: event.pageX,
                pageY: event.pageY
            });
        }
        var offset = $('.mti-floating').offset(),
//            x = event.changedTouches[0].pageX - 20,//me._x,
            y = event.changedTouches[0].pageY - 20//me._y;
        $('.mti-floating').offset(
            {
//                left: x,
                top: y
            }
        );
    },

   // }}}
   // {{{ sortend

    /**
     * sortendイベントハンドラ
     * @param el {Element} イベント対象エレメント
     * @return void
     */
    sortend: function (el) {

        var me = this;
        var target = $(el).closest('tr');
        $(target).unbind(me.__bindType.mousemove);
        $(target).unbind(me.__bindType.mouseout);
        var offset = $(el).offset();
        var x = offset.left;
        var y = offset.top;

        $('.mti-sortable tr').each(function () {
            if (y < $(this).offset().top) {
                var clone = $(target).clone();
                $(target).remove();
                $(clone).css({
                    position: 'static'
                });
                $(this).before(clone);
                me._sortableUnsetEvents();
                me._sortableSetEvents();
                return false;
            }
        });

    }
});
