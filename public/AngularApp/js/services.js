/**
 * Factories, services, API consumers
 */

angular
    .module('restApp.services', [])
    .factory('Article', function ($resource) {
        return $resource('/Articles/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('Task', function ($resource) {
        return $resource('/Tasks/:username', {
            username: '@username'
        }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('Station', function ($resource) {
        return $resource('/Stations/:StopID', {
            StopID: '@StopID'
        }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('User', function ($http, $state) {
        return {
            login: function () {

                console.log(this.info);
                $http
                    .post('/Users/login', this.info)
                    .then(function (response) {
                        if (response.data.username) { // User found!
                            console.log("USER!!");
                            if (response.data.isAdmin) {
                                console.log("ADMIN!!");
                                $state.go('articles');
                            } else {
                                $state.go('tasks');
                            }
                        } else {
                            console.log("NO USER!!");
                            alert("Bad login");
                        }
                    });
            }
        }
    })
    .service('UserService', function ($http, $state) {
        this.login = function () {
            console.log(this.info);
            $http
                .post('/Users/login', this.info)
                .then(function (response) {
                    if (response.data.username) { // User found!
                        console.log("USER!!");
                        if (response.data.isAdmin) {
                            console.log("ADMIN!!");
                            $state.go('articles');
                        } else {
                            $state.go('tasks');
                        }
                    } else {
                        console.log("NO USER!!");
                        alert("Bad login");
                    }
                });

        }
    })
    .service('popupService', function ($window) {
        this.showPopup = function (message) {
            return $window.confirm(message);
        }
    });