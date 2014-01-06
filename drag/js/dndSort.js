$.extend(dndSort = {}, dndBase, {

    onDrop: function (e) {

        var me = (e.data != 'undefined' && e.data.me != undefined)
            ? me = e.data.me : null,
            $event = e.originalEvent || event;

        var el = $($event.currentTarget).find(me.dragEl);
        var target = $('#'+$event.dataTransfer.getData('text'));
        var nextEl = null;
        el.each(function (key, val) {
            if (me.directionType == 'horizon') {
                if (parseInt($(val).offset()[me.getOffsetName()]) > parseInt($event[me.getPageXYName()])) {
                    nextEl = val;
                    return false;
                }
            } else if (me.directionType == 'vertical') {
                if (parseInt($(val).offset()[me.getOffsetName()]) > parseInt($event[me.getPageXYName()])) {
                    nextEl = val;
                    return false;
                }
            }
        });

        if (nextEl) {
            if ($(nextEl).attr('id') != target.attr('id')) {
                $(nextEl).before(target);
            }
        } else {
            $($event.currentTarget).append(
                target
            );
        }

        $(me.targets.drag).attr('draggable', false);

        if (me.type == 'table') {
            var t = me.targets.drag || me.targets;
//            $(t).css({display: 'table-row'});
            //$(t).closest('tbody').css({display: 'table-row'});
        }

    }

});
