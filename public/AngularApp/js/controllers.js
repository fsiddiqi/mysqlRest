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
    .controller('LoginController', function ($scope, $state, popupService, $window, User) {
        // Task should be User
        $scope.User = User;
        $scope.User.info = {};
        $scope.User.info.username = "";
        $scope.User.info.password = "";
        $scope.login = function () {
            console.log("Im logging in");
            $scope
                .User
                .login();
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
            $scope.task = Task.get({username: $stateParams.username});
            console.log($scope);
        };

        $scope.loadTask();
    })
    .controller('StationListController', function ($scope, $state, popupService, $window, Station) {

        $scope.stations = Station.query();

        $scope.editStation

    })
    .controller('StationEditController', function ($scope, $state, $stateParams, Station) {

        $scope.updateStation = function () {
            $scope
                .station
                .$update(function () {
                    $state.go('stations');
                });
        };

        $scope.loadStation = function () {
            $scope.station = Station.get({StopID: $stateParams.StopID});
            console.log($scope);
        };

        $scope.loadStation();
    });
