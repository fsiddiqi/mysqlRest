/**
 * Application router
 */

angular.module('restApp', ['ui.router', 'ngResource', 'restApp.controllers', 'restApp.services']);

angular
    .module('restApp')
    .config(function ($stateProvider, $httpProvider) {
        $stateProvider
            .state('articles', {
            url: '/articles',
            templateUrl: 'partials/articles/list.html',
            controller: 'ArticleListController'
        })
            .state('viewArticle', {
                url: '/articles/:id/view',
                templateUrl: 'partials/articles/view.html',
                controller: 'ArticleViewController'
            })
            .state('newArticle', {
                url: '/articles/new',
                templateUrl: 'partials/articles/add.html',
                controller: 'ArticleCreateController'
            })
            .state('editArticle', {
                url: '/articles/:id/edit',
                templateUrl: 'partials/articles/edit.html',
                controller: 'ArticleEditController'
            })
            // Login routes
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'LoginController'
            })

            // Station routes
            .state('stations', {
                url: '/stations',
                templateUrl: 'partials/stations/list.html',
                controller: 'StationListController'
            })
            .state('viewStation', {
                url: '/stations/:StopID/view',
                templateUrl: 'partials/stations/view.html',
                controller: 'StationViewController'
            })
            .state('editStation', {
                url: '/stations/:StopID/edit',
                templateUrl: 'partials/stations/edit.html',
                controller: 'StationEditController'
            })

            // Task routes
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'partials/tasks/list.html',
                controller: 'TaskListController'
            })
            .state('viewTask', {
                url: '/tasks/:username/view',
                templateUrl: 'partials/tasks/view.html',
                controller: 'TaskViewController'
            })
            .state('newTask', {
                url: '/tasks/new',
                templateUrl: 'partials/tasks/add.html',
                controller: 'TaskCreateController'
            })
            .state('editTask', {
                url: '/tasks/:username/edit',
                templateUrl: 'partials/tasks/edit.html',
                controller: 'TaskEditController'
            });

    })
    .run(function ($state) {
        $state.go('stations');
    });