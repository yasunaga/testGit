$.extend(dndBase = {}, mtiBase, {

    targets: null,

    drops: null,

    type: null,

    dragEl: null,

    directionType: 'vertical',

    direction: {
        horizon: {
            offset: 'left',
            page: 'pageX'
        },
        vertical: {
            offset: 'top',
            page: 'pageY'
        }
    },

    draggable: function (drags, drops, type, direction) {

        var me = this;
console.log(me.Touch);
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

        me.init(drags, drops, type, direction);

    },

    init: function (drags, drops, type, direction) {
        var me = this;
        me.targets = drags;
        me.drops = drops;
        me.type = type ? type : 'div',
        me.directionType = direction ? direction : 'vertical';
        switch (me.type) {
        case 'div':
            me.dragEl = 'div';
            break;
        case 'ul':
            me.dragEl = 'li';
            break;
        case 'table':
            me.dragEl = 'tr';
            break;
        }
        me.setEvents();

    },

    setEvents: function () {
        var me = this, t;
//        $('body').off(me.__bindType.mousemove);
/*
        $('body').on(me.__bindType.mousemove, function  () {
            event.preventDefault();
        });
*/
        if ($.isArray(me.targets)) {

            t = me.targets.join(',');
            $.each(t, function (key, val) {
                $(val).find('a, img').attr('draggable', false);
            })
            $(t).off(me.__bindType.mousedown);
            $(t).on(me.__bindType.mousedown, function () {
                if (me.type == 'table') {
//                    $(t).css({display: 'inline-block'});
                }
                $(t).attr('draggable', true);
                $(t).off('dragstart');
                $(t).on('dragstart', null, {me: me}, me.onDragStart);

                if ($.isArray(me.drops)) {
                    $(me.drops).off('dragover')
                               .off('drop');
                    $(me.drops.join(',')).on('dragover', null, {me: me}, me.onDragOver)
                                         .on('drop', null, {me: me}, me.onDrop);
                } else {
                    $(me.drops).off('dragover')
                               .off('drop');
                    $(me.drops).on('dragover', null, {me: me}, me.onDragOver);
                    $(me.drops).on('drop', null, {me: me}, me.onDrop);
                }

            });

        } else if ($.type(me.targets) == 'object') {

            var targets = me.targets;
            if (targets.drag != undefined && targets.target != undefined) {
                t = targets.drag;
                $(t).find('a, img').attr('draggable', false);
                $(t).off(me.__bindType.mousedown);
                var firetarget = targets.target || null;
                $(t).on(me.__bindType.mousedown, firetarget, function () {
                    console.log(me.__bindType.mousedown);
                    if (me.type == 'table') {
                        var width = $(t).css('width'),
                            height = $(t).css('height');

                        var tdWidths = [],
                            tdHeights = [];
                        $(t).find('td').each(function (k, v) {
                            tdWidths.push($(v).css('width'));
                            tdHeights.push($(v).css('height'));
                        });
//                        $(t).css({display: 'inline-block'});
//                        $(t).closest('tbody').css({display: 'inline-block'});

                        $(t).find('td').each(function (k, v) {
                            $(v).css({
                                'width': tdWidths[k],
                                'height': tdHeights[k]
                            });
                        });

                        $(t).css({
                            width: width,
                            height: height
                        });
                    }

                    $(t).attr('draggable', true);
                    if (firetarget) {
                        $(this).closest(me.dragEl).off('dragstart');
                        $(this).closest(me.dragEl).on(
                            'dragstart',
                            null,
                            {me: me},
                            me.onDragStart
                        );
                    } else {
                        $(t).off('dragstart');
                        $(t).on(
                            'dragstart',
                            null,
                            {me: me},
                            me.onDragStart
                        );
                    }

                    if ($.isArray(me.drops)) {
                        $(me.drops.join(',')).off('dragover')
                                             .off('drop');
                        $(me.drops.join(',')).on('dragover', null, {me: me}, me.onDragOver)
                                             .on('drop', null, {me: me}, me.onDrop);
                    } else {
                        $(me.drops).off('dragover')
                                   .off('drop');
                        $(me.drops).on('dragover', null, {me: me}, me.onDragOver)
                                   .on('drop', null, {me: me}, me.onDrop);
                    }
                });
            }

        } else {

            t = me.targets;
            $(t).find('a, img').attr('draggable', false);
            $(t).attr('draggable', true);
            $(t).on(me.__bindType.mousedown, function () {
                if (me.type == 'table') {
//                    $(t).css({display: 'inline-block'});
                }
                $(t).off('dragstart');
                $(t).on('dragstart', null, {me: me}, me.onDragStart);
                if ($.isArray(me.drops)) {
                    $(me.drops.join(',')).off('dragover')
                                         .off('drop');
                    $(me.drops.join(',')).on('dragover', null, {me: me}, me.onDragOver)
                                         .on('drop', null, {me: me}, me.onDrop);
                } else {
                    $(me.drops).off('dragover')
                               .off('drop');
                    $(me.drops).on('dragover', null, {me: me}, me.onDragOver);
                    $(me.drops).on('drop', null, {me: me}, me.onDrop);
                }
            });

        }

    },

    onDragStart: function (e) {
        var me = (e.data != 'undefined' && e.data.me != undefined)
            ? me = e.data.me : null,
            $event = e.originalEvent || event;
        $event.dataTransfer.setData('text', $event.target.id);
        me.elid = $event.target.id;
console.log('hoge');
//        $event.preventDefault();
    },

    onDragOver: function (e) {
        var me = (e.data != 'undefined' && e.data.me != undefined)
            ? me = e.data.me : null,
            $event = e.originalEvent || event;
//        $('#'+me.elid).css('opacity', '.5');

        $event.preventDefault();
    },

    onDrop: function (e) {

        var me = (e.data != undefined && e.data.me != undefined)
            ? me = e.data.me : null,
            $event = e.originalEvent || event;
        $event.preventDefault();

        var target = $('#'+$event.dataTransfer.getData('text'));
        $($event.currentTarget).append(target);
        $(me.targets).attr('draggable', false);

        if (me.type == 'table') {
            var t = me.targets.drag || me.targets;
            $(t).css({display: 'table-row'});
        }

    },

    getOffsetName: function () {

        var me = this,
            type = me.directionType;
        return me.direction[type].offset;

    },

    getPageXYName: function () {

        var me = this,
            type = me.directionType;
        return me.direction[type].page;

    }

});
