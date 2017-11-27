// declare a new module called 'myApp', and make it require the `ng-admin`
// module as a dependency
var myApp = angular.module('myApp', ['ng-admin']);
// declare a function to run when the module bootstraps (during the 'config'
// phase)
myApp.config([
    'NgAdminConfigurationProvider',
    function (nga) {
        // create an admin application
        var admin = nga
            .application('UI Admin')
            .baseApiUrl('/'); // main API endpoint

        // Sample API resource to be administered/maintained
        var article = nga.entity('Articles');
        // set the fields of the user entity list view
        article
            .listView()
            .fields([
                nga.field('title'),
                nga.field('url'),
                nga.field('text')
            ])
            .listActions(['show']);
        article
            .creationView()
            .fields([
                nga.field('title'),
                nga.field('url'),
                nga.field('text')
            ]);
        // use the same fields as for the creationView
        article
            .editionView()
            .fields(article.creationView().fields());
        article
            .showView()
            .fields(article.creationView().fields());

        // add the Task entity to the admin application
        admin.addEntity(article);

        var task = nga.entity('Tasks');
        // set the fields of the user entity list view
        task
            .listView()
            .fields([
                nga.field('id'),
                nga.field('title'),
                nga.field('status')
            ])
            .listActions(['show']);
        task
            .creationView()
            .fields([
                nga.field('title'),
                nga.field('status')
            ]);
        // use the same fields as for the creationView
        task
            .editionView()
            .fields(task.creationView().fields());
        task
            .showView()
            .fields(task.creationView().fields());

        // add the Article entity to the admin application
        admin.addEntity(task);

        // attach the admin application to the DOM and execute it
        nga.configure(admin);
    }
]);