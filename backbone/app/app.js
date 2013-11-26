/*
(function () {

    var Task = Backbone.Model.extend({
        defaults: {
            title: 'do something',
            completed: false
        },
        validate: function (attrs) {
            if (_.isEmpty(attrs.title)) {
                return 'title must not be empty!';
            }
        },
        toggle: function () {
            var me = this;
            me.set('completed', !me.get('completed'));
        }
    });
    var task1 = new Task({
        completed: true
    });

    task1.set('title', 'newTitle');
    console.log(task1.toJSON());
    task1.toggle();
    console.log(task1.toJSON());
    task1.set({
        title: ''
    }, {
        validate: true
    });
    console.log(task1.toJSON());

})();
*/
/*
(function () {
    var Task = Backbone.Model.extend({
        defaults: {
            title: "do something",
            completed: false
        }
    });

    var task = new Task();

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        className: 'liClass',
        id: 'liID'
        events: {
            'click .command': 'sayHello'
        },
        sayHello: function () {
            alert('hello');
        },
        template: _.template($('#task-template').html()),
        render: function () {
            var me = this,
                template = me.template(me.model.toJSON());
            me.$el.html(template);
            return me;
        }
    });

    var taskView = new TaskView({
        model: task
    });

    console.log(taskView.render().el);
    $('body').append(taskView.render().el);
})();
*/
/*
(function () {
    var Task = Backbone.Model.extend({
        defaults: {
            title: "do something",
            completed: false
        }
    });

    var task = new Task();

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#task-template').html()),
        render: function () {
            var me = this,
                template = me.template(me.model.toJSON());
            me.$el.html(template);
            return me;
        }
    });

    var Tasks = Backbone.Collection.extend({
        model: Task
    });

    var TasksView = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            var me = this;
            me.collection.each(function (task) {
                var taskView = new TaskView({model: task});
                me.$el.append(taskView.render().el);
            }, me);
            return me;
        }
    });
    var tasks = new Tasks([
        {
            title: 'task1',
            completed: true
        },
        {
            title: 'task2'
        },
        {
            title: 'task3'
        }
    ]);
    var tasksView = new TasksView({collection: tasks});
    console.log(tasksView);
    $('#tasks').html(tasksView.render().el);
})();*/
(function () {

    var Task = Backbone.Model.extend({
        defauls: {
            title: 'do something',
            completed: false
        }
    });

    var Tasks = Backbone.Collection.extend({
        model: Task
    });

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        initialize: function () {
            console.log('initialize');
            var me = this;
            me.model.on('destroy', me.remove, me);
        },
        events: {
            'click .delete': 'destroy'
        },
        destroy: function () {
            var me = this;
            if (window.confirm('Are you sure?')) {
                me.model.destroy();
            }
        },
        remove: function () {
            var me = this;
            me.$el.remove();
            console.log(me.$el);
        },
        template: _.template($('#task-template').html()),
        render: function () {
            var me = this, template = me.template(me.model.toJSON());
            me.$el.html(template);
            return me;
        }
    });

    var TasksView = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            var me = this;
            me.collection.each(function (task) {
                var taskView = new TaskView({model: task});
                me.$el.append(taskView.render().el);
            }, me);

            return me;
        }
    });

    var tasks = new Tasks([
        {
            title: 'task1',
            completed: true
        },
        {
            title: 'task2'
        },
        {
            title: 'task3'
        }
    ]);

    var tasksView = new TasksView({collection: tasks});

    $('#tasks').html(tasksView.render().el);
})();
