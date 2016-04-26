// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {

    /*    
    // SPA (single-page-app) approach
    var viewModel = {
        showList: ko.observable(false),
        showDetails: ko.observable(true)
    };
    
    
    ko.applyBindings(viewModel);
    */


    var viewModel = {
        todos: ko.observableArray()
    };
    // above is equivalent to below
    //================================================
    function ViewModel() {
        var self = this;
        var privateVar = "blah";

        // all of our setup logic
        function init() {
            var url = "http://parkland-csc175.github.io/csc175data/todos/list.json"
            $.get(url, function (result) {
                var todos = []
                // create instances of a our small Todo class
                result.forEach(function (item) {
                    var todo = new Todo(item);
                    todos.push(todo);
                });

                self.todos(todos);
            });

            setInterval(function () {
                // just "bump" the observable array 
                // to make it re-render the list
                var todos = self.todos();
                todos.forEach(function (todo) {
                    todo.completedOn.valueHasMutated();
                });
            }, 3 * 1000);
        }

        self.todos = ko.observableArray();

        self.markAsDone = function (todo) {
            todo.done(true);
            todo.completedOn(new Date());
        };

        self.removeItem = function (item) {
            self.todos.remove(item);
        };

        init();
    }

    function Todo(data) {
        var self = this;

        this.job = ko.observable();
        this.done = ko.observable();
        this.completedOn = ko.observable();

        this.timeSinceCompleted = ko.computed(function () {
            if (!self.done())
                return;

            var completedStr = self.completedOn();
            var completed = new Date(completedStr).getTime();
            var now = Date.now();
            var msElapsed = now - completed; // in milliseconds
            var minsElapsed = (msElapsed / 1000) / 60;

            return minsElapsed.toFixed(0);
        });

        if (data && data.job) {
            self.job(data.job);
        }

        if (data && data.done) {
            self.done(data.done);
        }

        if (data && data.completedOn) {
            self.completedOn(data.completedOn);
        }
    }

    var viewModelInstance = new ViewModel();
    // 'new' does something like: this = {};


    ko.applyBindings(viewModelInstance);
});