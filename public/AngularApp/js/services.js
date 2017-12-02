/**
 * Created by Sandeep on 01/06/14.
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
    .service('User', function ($http, $state) {
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