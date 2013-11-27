(function () {

    var hoge = {
        name: 'hoge',
        age: 10,
        tall: 170,
        weight: 70,
        fn: function () {
            alert('aa');
        }
    };

    console.log(JSON.stringify(hoge), hoge);

    // Model
    var Staff = Backbone.Model.extend({
        defaults: {
            name: '',
            age: 0,
            updateTime: new Date()
        },
        initialize: function () {
            console.log('initialize', "Staff[" + this.cid + "]: " + JSON.stringify(this));
        }

    });

    var tmpStaff = new Staff();
    tmpStaff.set({name: "Murata", age: 35, id: 101});

    console.log("Staff[" + tmpStaff.cid + "]: ",tmpStaff);
    var tmpStaff2 = new Staff({name: "Kenichiro", age: 35, id: 102});

    // Collection
    var Staffs = Backbone.Collection.extend({
        model: Staff
    });

    var staffs = new Staffs([tmpStaff, tmpStaff2]);

    staffs.each(function (model) {
        console.log(model);
    });

    console.log(staffs.where({age: 35}));
    console.log("staffs: ", staffs);
    console.log("staffs.get(cid): " , staffs.get("c1"));
    console.log("staffs.at(index): " + JSON.stringify(staffs.at(1)));
    console.log("staffs.get(id): " + JSON.stringify(staffs.get(102)));

})();
