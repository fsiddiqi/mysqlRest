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
    .factory('Login', function ($resource) {
        return $resource('/Login', {
            username: '@username',
            password: '@password'
        });
    })
    .service('popupService', function ($window) {
        this.showPopup = function (message) {
            return $window.confirm(message);
        }
    });