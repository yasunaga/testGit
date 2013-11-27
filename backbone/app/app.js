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

    // Model
    var Task = Backbone.Model.extend({
        defaults: {
            title: 'do something',
            completed: false
        },
        validate: function (attrs) {
            if (_.isEmpty(attrs.title)) {
                return 'title must not be empty';
            }
        },
        initialize: function () {
            var me = this;
            me.on('invalid', function (model, error) {
                $('#error').text(error);
            });
        }
    });

    // Collection
    var Tasks = Backbone.Collection.extend({
        model: Task
    });

    // li要素
    var TaskView = Backbone.View.extend({
        tagName: 'li',
        initialize: function () {
            console.log('initialize');
            var me = this;
            me.model.on('destroy', me.remove, me);
            me.model.on('change', me.render, me);
        },
        events: {
            'click .delete': 'destroy',
            'click .toggle': 'toggle'
        },
        toggle: function () {
            var me = this;
            me.model.set('completed', !me.model.get('completed'));
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
        },
        template: _.template($('#task-template').html()),
        render: function () {
            var me = this, template = me.template(me.model.toJSON());
            me.$el.html(template);
            console.log(me.model.toJSON());
            return me;
        }
    });

    // ul要素
    var TasksView = Backbone.View.extend({
        tagName: 'ul',
        initialize: function () {
            var me = this;
            me.collection.on('add', me.addNew, me);
            me.collection.on('destroy', me.updateCount, me);
            me.collection.on('change', me.updateCount, me);
        },
        addNew: function (task) {
            var me = this;
            var taskView = new TaskView({model: task});
            me.$el.append(taskView.render().el);
            me.updateCount();
            $('#title').val('').focus();
        },
        render: function () {
            var me = this;
            me.collection.each(function (task) {
                var taskView = new TaskView({model: task});
                me.$el.append(taskView.render().el);
            }, me);

            me.updateCount();
            return me;
        },
        updateCount: function () {
            var me = this,
                uncompletedTasks = me.collection.filter(function (task) {
                    return !task.get('completed');
                });

            $('#count').html(uncompletedTasks.length);
        }
    });

    // form要素
    var AddTaskView = Backbone.View.extend({
        el: '#addTask',
        events: {
            'submit': 'submit'
        },
        submit: function (e) {
            var me = this;
            e.preventDefault();
            //var task = new Task({title: $('#title').val()});
            $('#error').text('');
            var task = new Task();
            if (task.set({title: $('#title').val()}, {validate: true})) {
                me.collection.add(task);
            }
        }
    });

    // モデル
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
    var addTaskView = new AddTaskView({collection: tasks});

    $('#tasks').html(tasksView.render().el);
})();
