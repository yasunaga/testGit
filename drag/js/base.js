/**
 * mtiベースJS
 */
// {{{ mtiBase
/*
 * 共通スーパークラス
 */
mtiBase = {

    // {{{ props

    /**
     * 設定するイベントタイプ
     * @type {Boolean}
     */
    allDisabled: undefined,

    /**
     * 設定するイベントタイプ
     * @type {Object}
     */
    __bindType: {
        click: 'click',
        mousedown: 'mousedown',
        mousemove: 'mousemove',
        mouseup: 'mouseup',
        mouseout: 'mouseout'
    },

    /**
     * touchイベント有無フラグ
     * @type {Boolean}
     */
    Touch: typeof document.ontouchstart != "undefined",

    /**
     * pointer機能有効フラグ
     * @type {Boolean}
     */
    Pointer: window.navigator.pointerEnabled,

    /**
     * msPointer機能有効フラグ(IE10?)
     * @type {Boolean}
     */
    MSPoniter: window.navigator.msPointerEnabled,

    // }}}
    // {{{ isSurface

    /**
     * surface（IE11）判定メソッド
     * （暫定的）
     */

    isSurface: function () {
        var me = this,
            ret = false;
        if (me.MSPointer && me.Pointer && !me.Touch) {
            ret = true;
        }

        return ret;
    },

    // }}}
    // {{{ isTouch

    /**
     * iOS,Android系判定メソッド
     * （暫定的）
     */

    isTouch: function () {

        var me = this,
            ret = false;
        if (!me.isSurface() && me.Touch) {
            ret = true;
        }

        return ret;
    },

    // }}}
    // {{{ isPC

    /**
     * PC判定メソッド
     * （暫定的）
     */

    isPC: function () {

        var me = this,
            ret = false;
        if (!me.isSurface() && !me.isTouch()) {
            ret = true;
        }

        return ret;
    },

    // }}}
    // {{{ init

    /**
     * クラス初期化メソッド
     */
    _init : function(notSet) {

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

        // サブクラス初期化メソッドコール(継承先で必ず実装します)
        me.init();

        // 引数なしなら共通イベントを設定する
        if (notSet === undefined) {
            // 共通イベント設定
            me._setEvents();
        }

    },

    // }}}
    // {{{ _setEvents

    /**
     * 共通イベントハンドラ設定メソッド
     * POST送信時などでunsetするイベントハンドラを設定
     */
    _setEvents : function() {

        var me = this;

        // hrefが#のみのaタグのブラウザイベントを停止
        $('a').on("click", function() {
            if ($(this).attr('href') != undefined && $(this).attr('href').match('#$') == '#') {
                return false;
            } else if ($(this).attr('href') != undefined && $(this).attr('href') == 'javascript:void(0);') {
                return false;
            }
        });

        // 他のボタンなどをクリック後に無効にする、普通のリンク
        $(
            'a[href!="#"][href!="javascript:void(0);"][class!="not_disabled"]',
            'a:not([class*="datepicker"])'
        ).on(
            'click',
            function(e){
                if (me.allDisabled === true) {
                    // 無効状態なので、イベント停止
                    e.preventDefault();
                    e.stopPropagation();
                    // 念のため
                    return false;
                } else {
                    // ハンドラを取り除く
                    me.unsetEvents();
                }
            }
        );
    },

    // }}}
    // {{{ isScrollable

    /**
     * スクロールエレメント判定メソッド
     */
    isScrollable: function (selector) {
        var height = $(selector).height(),
            innerHeight = $(selector).children().height();

        return height < innerHeight;
    },

    // }}}
    // {{{ init

    /**
     * サブクラス初期化メソッド
     * サブクラスでオーバーライド
     */
    init : function() {},

    // }}}
    // {{{ setEventsNotUnset

    /**
     * サブクラスイベントハンドラ設定メソッド
     * サブクラスでオーバーライド
     */
    setEventsNotUnset : function() {},

    // }}}
    // {{{ setEvents

    /**
     * サブクラスイベントハンドラ設定メソッド
     * サブクラスでオーバーライド
     */
    setEvents : function() {},

    // }}}
    // {{{ unsetEvents

    /**
     * サブクラスイベントハンドラ削除メソッド
     * サブクラスでオーバーライド
     */
    unsetEvents: function() {}

    // }}}

};

// }}}
