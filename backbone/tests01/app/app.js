(function () {
    var App = {};

    var indexView = Backbone.View.extend({

        tagName: 'div',

        render: function () {
            this.$el.html('<h2>TOPページです</h2>');

            return this;
        }
    });

    var infoView = Backbone.View.extend({

        tagname: 'div',

        render: function () {
            this.$el.html('<h2>INFOページです</h2>');

            return this;
        }
    });

    var searchView = Backbone.View.extend({

        tagname: 'div',

        render: function () {
            console.log(arguments);
            this.$el.html('<h2>SEARCHページです</h2>');

            return this;
        }
    });

    var router = Backbone.Router.extend({
        routes: {
            ''                      : 'index',
            '!/info'                : 'info',
            '!/search/:query'       : 'search',
            '!/search/:query/p:page': 'search'
        },
        index: function () {

            var view = new indexView();
            $('#main-area').html(view.render().el);
        },

        info: function () {
            var view = new infoView();
            $('#main-area').html(view.render().el);
        },

        search: function () {
            var view = new searchView();
            $('#main-area').html(view.render().el);
        }
    });

    App.router = new router();
    Backbone.history.start();

})();
