
$.extend(indexApp = {}, mtiBase, {

    init: function () {
    }
});

$(document).ready(function () {
    /*
    dndSort.draggable(
        {
            drag: '.drag tr',
            target: 'td.move p'
        },
        '.drag tbody',
        'table'
    );
    */
    touchAction.sortable('.drag', 'td.move');
});
