/**
 * Created by Sandeep on 01/06/14.
 */
angular
    .module('restApp.controllers', [])
    .controller('ArticleListController', function ($scope, $state, popupService, $window, Article) {

        $scope.articles = Article.query();

        $scope.deleteArticle = function (article) {
            if (popupService.showPopup('Really delete this?')) {
                article
                    .$delete(function () {
                        $window.location.href = '';
                    });
            }
        }

    })
    .controller('ArticleViewController', function ($scope, $stateParams, Article) {

        $scope.article = Article.get({id: $stateParams.id});

    })
    .controller('ArticleCreateController', function ($scope, $state, $stateParams, Article) {

        $scope.article = new Article();

        $scope.addArticle = function () {
            $scope
                .article
                .$save(function () {
                    $state.go('articles');
                });
        }

    })
    .controller('ArticleEditController', function ($scope, $state, $stateParams, Article) {

        $scope.updateArticle = function () {
            $scope
                .article
                .$update(function () {
                    $state.go('articles');
                });
        };

        $scope.loadArticle = function () {
            $scope.article = Article.get({id: $stateParams.id});
            console.log($scope);
        };

        $scope.loadArticle();
    })
    // Login Controller
    .controller('LoginController', function ($scope, $state, popupService, $window, Login) {
        // Task should be User
        $scope.user = {};
        $scope.login = function () {
            console.log("Im logging in");
            console.log($scope.user);
        }
    })

    /**
 * Tasks Controller
 */
    .controller('TaskListController', function ($scope, $state, popupService, $window, Task) {

        $scope.tasks = Task.query();

        $scope.deleteTask = function (article) {
            if (popupService.showPopup('Really delete this?')) {
                task
                    .$delete(function () {
                        $window.location.href = '';
                    });
            }
        }

    })
    .controller('TaskViewController', function ($scope, $stateParams, Task) {

        $scope.task = Task.get({username: $stateParams.username});

    })
    .controller('TaskCreateController', function ($scope, $state, $stateParams, Task) {

        $scope.task = new Task();

        $scope.addTask = function () {
            $scope
                .task
                .$save(function () {
                    $state.go('tasks');
                });
        }

    })
    .controller('TaskEditController', function ($scope, $state, $stateParams, Task) {

        $scope.updateTask = function () {
            $scope
                .task
                .$update(function () {
                    $state.go('tasks');
                });
        };

        $scope.loadTask = function () {
            $scope.task = Task.get({id: $stateParams.id});
            console.log($scope);
        };

        $scope.loadTask();
    });
